import { Input, KeyCode, Time, Transform, Vector3 } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class LessonPaddleScript extends ZepetoScriptBehaviour {
    PaddleSpeed : number;

    Start() {
        this.PaddleSpeed = 10;    
    }

    //Update function runs once per frame
    Update() {
        if (Input.GetKey(KeyCode.RightArrow)) {
            this.gameObject.transform.Translate(new Vector3(this.PaddleSpeed * Time.deltaTime,0,0));
        }

        if (Input.GetKey(KeyCode.LeftArrow)) {
            this.gameObject.transform.Translate(new Vector3(-this.PaddleSpeed * Time.deltaTime,0,0));
        }
    }

}