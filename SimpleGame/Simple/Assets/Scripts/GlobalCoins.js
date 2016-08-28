#pragma strict
import UnityEngine.UI;


var CoinDisplay: GameObject;
static var CoinCount : int  = 0;
function Start () {

}

function Update () {

	CoinDisplay.GetComponent.<Text>().text = "Gems: " + CoinCount;
	
}