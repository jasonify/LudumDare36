#pragma strict

function Start () {

}

function Update () {
}

function OnTriggerEnter(col : Collider) {


	col.transform.position = Vector3(0, 0.12, 0);


	var rb = col.GetComponent.<Rigidbody>();
	rb.isKinematic = true;
	yield WaitForSeconds(0.1);
	rb.isKinematic = false; 
	Debug.Log("WorldEdge Hit");

	if(col.gameObject.tag == "Player"){
		Debug.Log("Game over :(");
		// TODO: agme over screen
		GlobalCoins.CoinCount = 0;
	}

}