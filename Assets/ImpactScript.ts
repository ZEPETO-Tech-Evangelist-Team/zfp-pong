import { Collision, GameObject, Quaternion } from 'UnityEngine'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class ImpactScript extends ZepetoScriptBehaviour {
    public impactFX: GameObject;

    Start() {    

    }

    OnCollisionEnter(collision: Collision) {
        if (collision.gameObject.tag === "BALL") {
            GameObject.Instantiate(this.impactFX, collision.contacts[0].point, Quaternion.identity);
        }
    }
}