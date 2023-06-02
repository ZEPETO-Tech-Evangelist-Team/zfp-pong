import { Text } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class ScoreScript extends ZepetoScriptBehaviour {
    public scoreText: Text;
    public score: number;

    Start() {    

    }

    AddToScore() {
        this.score = this.score + 1;
        this.scoreText.text = "Score: " + this.score.toString();
    }

}