import { Text } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class ScoreScript extends ZepetoScriptBehaviour {
    public ScoreText: Text;
    public ScoreAmount: number;

    Start() {    

    }

    public AddToScore() {
        this.ScoreAmount = this.ScoreAmount + 1;
        this.ScoreText.text = "Score: " + this.ScoreAmount.toString();
    }
}