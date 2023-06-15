import { Input, KeyCode, Vector3, Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ScoreScript from './ScoreScript';

export default class PaddleScript extends ZepetoScriptBehaviour {
    //Declaring a public variable named "XSpeed" of type "number"
    //The "public" keyword makes "XSpeed" accessible to other scripts and viewable and modifiable in the inspector
    public XSpeed: number;

    //Start() gets called once when the game starts
    Start() {    
        //ScoreScript.StaticFunction();
    }

    //Update() gets called once every frame
    Update() {

        //If statement that checks to see the left arrow key is pressed down this frame
        //If statements check to see if the condition inside the ( ) is true or false, if it is true, then it will run the code inside { }

        //Input                         get the "Input" class

        //GetKey(KeyCode.LeftArrow)     call the "GetKey" function inside the "Input" class    
        //NOTE:                         "GetKey" function returns true or false (if you hover over "GetKey", you can see the function details)                

        //(KeyCode.LeftArrow)           Pass in a "KeyCode" enum to the "GetKey" class.
        //                              "GetKey" function will return true or false based on if the left arrow key is pressed down this frame

        if (Input.GetKey(KeyCode.LeftArrow)) {

            //if the left arrow was pressed, then call the "MovePaddleLeft()" function
            this.MovePaddleLeft();

        } 

        //Same behavior as the above if statement, except this one checks if the right arrow key is pressed down this frame
        if (Input.GetKey(KeyCode.RightArrow)) {

            //if the right arrow was pressed, then call the "MovePaddleLeft()" function
            this.MovePaddleRight();

        }
                     
    }

    //Declaring the "MovePaddleLeft()" function
    MovePaddleLeft() {
        //let                                                   Reserved keyword used before declaring a variable inside a function

        //leftDirection : Vector3                               declaring a variable named "leftDirection" of type "Vector3"  

        //= new Vector3(-this.XSpeed * Time.deltaTime,0,0)      assigning the "leftDirection" variable a value
        let leftDirection : Vector3 = new Vector3(-this.XSpeed * Time.deltaTime,0,0);

        //this.gameObject               Reference to the GameObject this script is attached to

        //transform                     Reference to the Transform component that exist on the GameObject this script is attached to

        //Translate                     Function inside the Transform class that takes a "Vector3" as a parameter

        //(leftDirectionVector3)        pass in the leftDirectionVector3 variable that you declared and assigned inside this MovePaddleLeft function
        this.gameObject.transform.Translate(leftDirection);
    }

    //Declaring the "MovePaddleRight()" function
    MovePaddleRight() {

        let rightDirection : Vector3 = new Vector3(this.XSpeed * Time.deltaTime,0,0);

        this.gameObject.transform.Translate(rightDirection);
    }
}