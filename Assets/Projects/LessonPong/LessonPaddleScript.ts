import { Input, KeyCode, Time, Transform, Vector3 } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class LessonPaddleScript extends ZepetoScriptBehaviour {
    public PaddleSpeed : number;

    //Start function runs once when the game starts
    Start() {
        this.PaddleSpeed = 10;    
        //console.log("Inside Start Function");
        //this.gameObject.GetComponent<Transform>().position = new Vector3(5,-3,0);
    }

    //Update function runs once per frame
    Update() {
        //console.log("Inside Update Function");
        //this.gameObject.transform.Translate(new Vector3(1 * Time.deltaTime,0,0));

        if (Input.GetKey(KeyCode.RightArrow)) {
            this.gameObject.transform.Translate(new Vector3(this.PaddleSpeed * Time.deltaTime,0,0));
        }

        if (Input.GetKey(KeyCode.LeftArrow)) {
            this.gameObject.transform.Translate(new Vector3(-this.PaddleSpeed * Time.deltaTime,0,0));
        }
    }

}