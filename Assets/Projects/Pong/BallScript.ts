import { Collider, ForceMode, GameObject, Rigidbody, Vector3 } from 'UnityEngine';
import { Text } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { SceneManager } from 'UnityEngine.SceneManagement';
import ScoreScript from './ScoreScript';

export default class BallScript extends ZepetoScriptBehaviour {
    public ForceAmount: number;

    Start() {   
        this.AddForceToBall();
    }

    OnCollisionEnter(collider : Collider) {
        if (collider.gameObject.tag === "WALL") {
            this.AddPointWhenBallHitsWall();
        }

        if (collider.gameObject.tag === "LAVA") {
            this.RestartGameWhenBallHitsLava();
        }
    }

    AddForceToBall() {
        this.gameObject.GetComponent<Rigidbody>().AddForce(new Vector3(this.ForceAmount,this.ForceAmount,0), ForceMode.Impulse);
    }

    AddPointWhenBallHitsWall() {
        GameObject.Find("Score").GetComponent<ScoreScript>().AddToScore();
    }

    RestartGameWhenBallHitsLava() {
        SceneManager.LoadScene("PongScene");
    }

}