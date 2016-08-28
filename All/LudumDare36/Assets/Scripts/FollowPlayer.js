var Player : Transform;

var xDist : float = 3;
var zDist : float = -10;

function Update () {
	transform.position.z = Player.position.z + zDist;
	transform.position.x  = Player.position.x + xDist;

}


function LastUpdate(){
	GetComponent.<Camera>().main.transform.position.y = 3;
}

