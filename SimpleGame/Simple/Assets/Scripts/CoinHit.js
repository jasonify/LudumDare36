#pragma strict

function Start () {

}

function Update () {


}

function OnTriggerEnter(col : Collider){

	transform.GetComponent.<Collider>().isTrigger = false;

	if(col.gameObject.tag == "Player") {
		transform.position = Vector3(Random.Range(-8, 8), 0.1, Random.Range(-3, 3));
		GlobalCoins.CoinCount += 1;
		Debug.Log('HIT COIN!');

	}

	transform.GetComponent.<Collider>().isTrigger = true;

}