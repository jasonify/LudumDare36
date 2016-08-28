#pragma strict

function Start () {

}

var rotationSpeed:float = 1;
function Update () {

	transform.Rotate(0,2,0, Space.World);
}