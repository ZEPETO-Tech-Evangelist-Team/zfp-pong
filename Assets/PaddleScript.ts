import { Input, KeyCode, Time, Vector3 } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class PaddleScript extends ZepetoScriptBehaviour {
    public xSpeed: number;

    Start() {    

    }

    Update() {
        if (Input.GetKey(KeyCode.LeftArrow)) {
            this.gameObject.transform.Translate(new Vector3(-this.xSpeed * Time.deltaTime,0,0));
        } 

        if (Input.GetKey(KeyCode.RightArrow)) {
            this.gameObject.transform.Translate(new Vector3(this.xSpeed * Time.deltaTime,0,0));
        }
    }


}