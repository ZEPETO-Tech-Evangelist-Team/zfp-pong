import { Collider, Debug, ForceMode, GameObject, Rigidbody, Vector3 } from 'UnityEngine';
import { Text } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { SceneManager } from 'UnityEngine.SceneManagement';
import ScoreScript from './ScoreScript';
import { ZepetoPlayers } from 'ZEPETO.Character.Controller';

export default class BallScript extends ZepetoScriptBehaviour {
    //Declaring a variable named "ForceAmount" of type "number"
    public ForceAmount: number;

    //=====================EVENT FUNCTIONS============================================================

    //Start() gets called once when the game starts
    Start() {   
        this.ForceAmount = 5;
        //Calling "AddForceToBall()" function inside the Start function
        this.AddForceToBall();
    }

    //OnCollisionEnter gets called when the GameObject this script is attached to hits a Collider
    //The Collider of the GameObject you hit (we name it "colliderThatWasHit") is passed into the OnCollisionEnter function
    OnCollisionEnter(colliderThatWasHit : Collider) {

        //Check if the collider of the GameObject you hit is tagged as "WALL"
        if (colliderThatWasHit.gameObject.tag === "WALL") {

            //If the GameObject of the collider you hit is tagged as "WALL", then call the "AddPointWhenBallHitsWall()" function
            this.AddPointWhenBallHitsWall();

        }

        //Check if the collider of the GameObject you hit is tagged as "LAVA"
        if (colliderThatWasHit.gameObject.tag === "LAVA") {

            //If the GameObject of the collider you hit is tagged as "LAVA", then call the "RestartGameWhenBallHitsLava()" function
            this.RestartGameWhenBallHitsLava();
        }
    }

    //==========================================================================================
    //=====================FUNCTIONS============================================================

    //Declaring a function called "AddForceToBall"
    AddForceToBall() {
        let ballForce: Vector3 = new Vector3(this.ForceAmount, this.ForceAmount, 0);

        this.gameObject.GetComponent<Rigidbody>().AddForce(ballForce, ForceMode.Impulse);

        //this.gameObject               reference to the GameObject that this script is attached to

        //======================================================================================

        //GetComponent<Rigidbody>()     reference to the "Rigidbody" class component on the GameObject

        //======================================================================================

        //AddForce                      calls the "AddForce($force: Vector3, $mode: ForceMode)" function that exist on the "Rigidbody" class
        //NOTE:                         notice that "AddForce" needs 2 parameters (pieces of information), a Vector3 class and a ForceMode enum
    }

    //Declaring a function called "AddPointWhenBallHitsWall"
    AddPointWhenBallHitsWall() {
        //Debug.LogError(GameObject.Find("Score").GetComponent<ScoreScript>().MyFunction(1, "blah"));

        GameObject.Find("Score").GetComponent<ScoreScript>().AddToScore();

        //GameObject.Find("Score")      get the GameObject class and call the "Find" function, which will look for a GameObject in the scene named "Score"
        //NOTE                          "Find($name: string)" function takes a parameter of type "string"

        //======================================================================================

        //GetComponent<ScoreScript>()   reference to the "ScoreScript" class component on the "Score" GameObject

        //======================================================================================

        //AddToScore()                  call the "AddToScore()" function inside the "ScoreScript" class component

    }

    //Declaring a function called "RestartGameWhenBallHitsLava"
    RestartGameWhenBallHitsLava() {

        SceneManager.LoadScene("PongScene");

        //"SceneManager" class has a "LoadScene($sceneName: string)" function that takes a "string" parameter
        //"LoadScene($sceneName: string)" will load a Unity scene named "PongScene"

    }

}