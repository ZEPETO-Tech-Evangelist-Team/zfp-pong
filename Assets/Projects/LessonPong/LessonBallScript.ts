import { Collider, ForceMode, GameObject, Rigidbody, Vector3 } from 'UnityEngine';
import { SceneManager } from 'UnityEngine.SceneManagement';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import LessonScoreScript from './LessonScoreScript';

export default class LessonBallScript extends ZepetoScriptBehaviour {
    ForceAmount : number;

    Start() {
        this.ForceAmount = 10; 
        this.AddForceToBall();
    }

    Update() {

    }

    OnCollisionEnter(colliderThatWasHit : Collider) {
        if (colliderThatWasHit.gameObject.tag == "LESSON_WALL") {
            this.AddPointWhenBallHitsWall();
        }

        if (colliderThatWasHit.gameObject.tag == "LESSON_LAVA") {
            this.RestartGameWhenBallHitsLava();
        }
    }

    AddForceToBall() {
        this.gameObject.GetComponent<Rigidbody>().AddForce(new Vector3(this.ForceAmount,this.ForceAmount,0), ForceMode.Impulse);
    }

    AddPointWhenBallHitsWall() {
        GameObject.Find("Score").GetComponent<LessonScoreScript>().AddToScore();
    }

    RestartGameWhenBallHitsLava() {
        SceneManager.LoadScene("LessonPongExample");
    }
}