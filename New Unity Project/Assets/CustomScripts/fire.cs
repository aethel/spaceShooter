using UnityEngine;
using System.Collections;

public class fire : MonoBehaviour {
    public float speed;
    private Vector3 direction;
	// Use this for initialization
	void Start () {
        direction = Camera.main.transform.forward;
	}
	
	// Update is called once per frame
	void Update () {
        Vector3 newPosition = transform.position;
        newPosition += direction * speed;
        transform.position = newPosition;

	}
}
