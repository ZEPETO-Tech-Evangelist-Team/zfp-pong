import { Debug } from 'UnityEngine';
import { Text } from 'UnityEngine.UI';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class ScoreScript extends ZepetoScriptBehaviour {
    //Declaring a public variable named "ScoreText" of type "Text"
    public ScoreText: Text;

    //Declaring a public variable named "ScoreAmount" of type "number"
    public ScoreAmount: number;

    //public static StaticFunction() {
        //console.log("I'm a Static Function");
    //}

    //public MyFunction($test : number, $test2 : string) : number {
        //return $test + 1;
    //}

    public MakeSandwich(ingredient1 : string, ingredient2 : string) : string {
        return ingredient1 + ingredient2;
    }

    public SayHello( ) : void {
        Debug.Log("Welcome to our castle!");
    }



    

    Start() {    

        //this.ScoreText                Reference to the "ScoreText" variable in this script
        // =                            = is an assignment operator, we need to assign the variable on the left side with the value we get from the right side
        //this.gameObject               Reference to the GameObject this script is attached to
        //GetComponent<Text>()          Get the "Text" component that exist on the GameObject this script is attached to
        this.ScoreText = this.gameObject.GetComponent<Text>();

    }

    //Declaring a function called "AddToScore"
    public AddToScore() {

        //this.ScoreAmount              Reference to the "ScoreAmount" variable in this script
        //= this.ScoreAmount + 1        Assigning the value of "ScoreAmount" to itself + 1
        //NOTE:                         We can add 1 to ScoreAmount because "ScoreAmount" is of type "number"
        this.ScoreAmount = this.ScoreAmount + 1;

        //this.ScoreAmount              Reference to the "ScoreAmount" variable in this script
        //.text                         "ScoreAmount" is of type "Text". The "Text" class has a variable "text" (t is lowercase) that is of type "string"
        // =                            = is an assignment operator, we need to assign the variable on the left side with the value we get from the right side
        //                              Assigning SocreText.text to the string "Score: "
        //this.ScoreAmount.toString();  "ScoreAmount" is of type "number"
        //                              The "number" class has a function called "toString()"
        //                              "toString()" allows you to convert a "number" type to a "string" type
        // +                            Converting "number" type to "string" type allows you to use the "+" operator
        //                              Adding 2 strings together gives you: "Score: " + "1" = "Score: 1"
        this.ScoreText.text = "Score: " + this.ScoreAmount.toString();
    }
}