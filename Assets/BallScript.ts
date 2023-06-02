import { Animator, AudioSource, Collision, ForceMode, GameObject, Input, KeyCode, Rigidbody, Vector3 } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ScoreScript from './ScoreScript';
import { SceneManager } from 'UnityEngine.SceneManagement';

export default class BallScript extends ZepetoScriptBehaviour {
    public scoreScript: ScoreScript;
    public rigidbody: Rigidbody;
    public forceAmount: number;
    public metalHitAudio: AudioSource;

    Start() { 
        this.scoreScript = GameObject.Find("Score").GetComponent<ScoreScript>();
        this.rigidbody.AddForce(new Vector3(this.forceAmount,this.forceAmount,0), ForceMode.Impulse); 
    }

    OnCollisionEnter(collision: Collision) {
        if(collision.gameObject.tag === "WALL") {
            this.scoreScript.AddToScore();

            GameObject.Find("Main Camera").GetComponent<Animator>().Play("CAMERA_SHAKE");

            this.metalHitAudio.Play();
        }

        if (collision.gameObject.tag === "LAVA") {
            SceneManager.LoadScene("Main");
        }
    }
}