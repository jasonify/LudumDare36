using UnityEngine;
using System.Collections;

public class Player : MonoBehaviour {


	public float moveSpeed = 2f;
	private float maxSpeed = 5f;

	private Vector3 input;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		input = new Vector3 (-Input.GetAxis ("Horizontal"), 0, -Input.GetAxis ("Vertical"));

		if (GetComponent<Rigidbody>().velocity.magnitude < maxSpeed) {
			GetComponent<Rigidbody>().AddForce (input * moveSpeed);
		}
	}
}
