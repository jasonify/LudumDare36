#pragma strict

function Start () {

}

function Update () {
}

function OnTriggerEnter(col : Collider) {




	var rb = col.GetComponent.<Rigidbody>();
	rb.isKinematic = true;
	yield WaitForSeconds(0.1);
	rb.isKinematic = false; 
	Debug.Log("WorldEdge Hit");

	col.transform.position = Vector3(0, 0.12, 0);
	if(col.gameObject.tag == "Player"){
		col.transform.position = Vector3(-6.75, 0.12, 0.23);


		Debug.Log("Game over :(");
		// TODO: agme over screen
		GlobalCoins.CoinCount = 0;
	}

}