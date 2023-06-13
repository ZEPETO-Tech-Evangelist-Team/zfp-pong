import { Text } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class ScoreScriptSFX extends ZepetoScriptBehaviour {
    public scoreText: Text;
    public score: number;

    Start() {    

    }

    public AddToScore() {
        this.score = this.score + 1;
        this.scoreText.text = "Score: " + this.score.toString();
    }

}