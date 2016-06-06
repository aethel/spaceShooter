#pragma strict

var speed : float;

function Start () {
    var target = GetComponent(Rigidbody);

    target.velocity = transform.forward * speed;
}
