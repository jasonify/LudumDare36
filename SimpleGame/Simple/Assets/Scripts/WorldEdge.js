#pragma strict

function Start () {

}

function Update () {
}

var PlayerDead : AudioSource;

function OnTriggerEnter(col : Collider) {




	var rb = col.GetComponent.<Rigidbody>();
	rb.isKinematic = true;
	yield WaitForSeconds(0.1);
	rb.isKinematic = false; 
	//Debug.Log("WorldEdge Hit");

	col.transform.position = Vector3(0, 0.12, 0);
	if(col.gameObject.tag == "Player"){
		PlayerDead.Play();
		col.transform.position = Vector3(-6.75, 0.12, 0.23);	
		Debug.Log("Game over :(");
		// TODO: agme over screen
		GlobalCoins.CoinCount = 0;



		// Remove all ghosts :( because lost
		var   gameObjects = GameObject.FindGameObjectsWithTag ("ghost");
     
	     for(var i = 0 ; i < gameObjects.Length ; i ++)
	     {
	         Destroy(gameObjects[i]);
	     }

	}

}