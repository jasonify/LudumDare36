#pragma strict


var xLow : float = -0.2;
var xHigh : float =  0.2;
var zLow : float = -0.2;
var zHigh : float =  0.2;



function Start () {

}

var PlayerCrashSound: AudioSource;

function Update () {

	transform.position.x = transform.position.x + Random.Range(xLow, xHigh);
	transform.position.z = transform.position.z + Random.Range(zLow, zHigh);

}


function OnCollisionEnter(col: Collision) {
	//Debug.Log("Colliding!");
	if(col.gameObject.tag == "Player"){
		Debug.Log("PlayerCrash");
		PlayerCrashSound.Play();	
	}
}