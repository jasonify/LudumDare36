#pragma strict

function Start () {

}

function Update () {


}
var Ghost: GameObject;
var HitSound: AudioSource;
function OnTriggerEnter(col : Collider){

	transform.GetComponent.<Collider>().isTrigger = false;

	if(col.gameObject.tag == "Player") {
		var ghost = Instantiate(Ghost, transform.position, transform.rotation);
		ghost.tag = "ghost";
		HitSound.Play();
		transform.position = Vector3(Random.Range(-8, 8), 0.1, Random.Range(-3, 3));
		GlobalCoins.CoinCount += 1;

		 

		Debug.Log('HIT COIN!');


	}

	transform.GetComponent.<Collider>().isTrigger = true;

}