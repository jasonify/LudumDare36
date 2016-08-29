
function Start () {

}

function Update () {
}

var KillScreen : GameObject;
var PlayerDead : AudioSource;

function OnTriggerEnter(col : Collider) {

	var rb = col.GetComponent.<Rigidbody>();

	if(col.gameObject.tag == "DeadPlayer"){
		
	} else{

		if(col.gameObject.tag == "Player"){
			col.gameObject.tag ="DeadPlayer";
			var oldMateiral = col.gameObject.GetComponent.<Renderer>().material.color;
			col.gameObject.GetComponent.<Renderer>().material.color = Color(0.0f, 0.0f, 0.0f, 0.05f);
			yield WaitForSeconds(2);
			KillScreen.SetActive(true);

			KillScreen.GetComponent("Animator").enabled = true;
//			KillScreen.GetComponent("Animator").enabled = true;

			yield WaitForSeconds(0.05);
			PlayerDead.Play();
			yield WaitForSeconds(0.05);
			KillScreen.SetActive(false);
			KillScreen.GetComponent("Animator").enabled = false;


			rb.isKinematic = true;
			yield WaitForSeconds(0.1);
			rb.isKinematic = false; 


			col.gameObject.tag ="Player";

		
			col.gameObject.GetComponent.<Renderer>().material.color = oldMateiral; // fully opaque

					col.transform.position = Vector3(-6.75, -0.35, 0.23);	
			Debug.Log("Game over :(");

			// TODO: agme over screen
			GlobalCoins.CoinCount = 0;



			// Remove all ghosts :( because lost
			var   gameObjects = GameObject.FindGameObjectsWithTag ("ghost");
	     
		     for(var i = 0 ; i < gameObjects.Length ; i ++)
		     {
		         Destroy(gameObjects[i]);
		     }

		    
		} else {

			
			rb.isKinematic = true;
			yield WaitForSeconds(0.1);
			rb.isKinematic = false; 
			//Debug.Log("WorldEdge Hit");

			col.transform.position = Vector3(0, 0.12, 0);

		}
	}

}