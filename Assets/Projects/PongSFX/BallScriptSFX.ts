import { Animator, AudioSource, Collision, Debug, ForceMode, GameObject, Input, KeyCode, Quaternion, Rigidbody, Vector3 } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ScoreScript from './ScoreScriptSFX';
import { SceneManager } from 'UnityEngine.SceneManagement';

export default class BallScriptSFX extends ZepetoScriptBehaviour {
    public forceAmount: number;
    public impactFX: GameObject;

    Start() { 
        this.AddForceToBall();
    }

    OnCollisionEnter(collision: Collision) {
        if(collision.gameObject.tag === "WALL") {
            this.AddPointWhenBallHitsWall();

            this.ShakeCamera();

            this.PlayBallImpactSound();

            this.PlayBallImpactParticleSystem(collision);
        }

        if (collision.gameObject.tag === "LAVA") {
            this.RestartGameWhenBallHitsLava();
        }
    }

    AddForceToBall() {
        this.gameObject.GetComponent<Rigidbody>().AddForce(new Vector3(this.forceAmount,this.forceAmount,0), ForceMode.Impulse);
    }

    AddPointWhenBallHitsWall() {
        GameObject.Find("Score").GetComponent<ScoreScript>().AddToScore();
    }

    RestartGameWhenBallHitsLava() {
        SceneManager.LoadScene("PongSceneSFX");
    }

    ShakeCamera() {
        GameObject.Find("Main Camera").GetComponent<Animator>().Play("CAMERA_SHAKE");
    }

    PlayBallImpactSound() {
        this.GetComponent<AudioSource>().Play();
    }

    PlayBallImpactParticleSystem(collision: Collision) {
        GameObject.Instantiate(this.impactFX, collision.contacts[0].point, Quaternion.identity);
    }
}