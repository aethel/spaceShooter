#pragma strict

var rotate : float;

function Start () {
    var target = GetComponent(Rigidbody);

    target.angularVelocity = Random.insideUnitSphere * rotate;

}

