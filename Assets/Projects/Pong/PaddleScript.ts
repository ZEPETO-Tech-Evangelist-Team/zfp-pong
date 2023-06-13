import { Input, KeyCode, Vector3, Time } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class PaddleScript extends ZepetoScriptBehaviour {
    public XSpeed: number;

    Start() {    

    }

    Update() {
        if (Input.GetKey(KeyCode.LeftArrow)) {
            this.MovePaddleLeft();
        } 

        if (Input.GetKey(KeyCode.RightArrow)) {
            this.MovePaddleRight();
        }
    }

    MovePaddleLeft() {
        this.gameObject.transform.Translate(new Vector3(-this.XSpeed * Time.deltaTime,0,0));
    }

    MovePaddleRight() {
        this.gameObject.transform.Translate(new Vector3(this.XSpeed * Time.deltaTime,0,0));
    }
}