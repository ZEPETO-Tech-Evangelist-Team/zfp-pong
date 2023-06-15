import { TextMeshProUGUI } from 'TMPro';
import { Text } from 'UnityEngine.UI'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class LessonScoreScript extends ZepetoScriptBehaviour {

    ScoreText : TextMeshProUGUI;
    ScoreAmount : number;

    Start() {    
        this.ScoreText = this.gameObject.GetComponent<TextMeshProUGUI>();
    }

    Update() {

    }

    AddToScore() {
        this.ScoreAmount = this.ScoreAmount + 1;

        this.ScoreText.text = this.ScoreAmount.toString();
    }

}