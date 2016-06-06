#pragma strict
class Boundary {
    var xMin : float;
    var xMax : float;
    var zMin : float;
    var zMax : float;
    }

var carboardObject : GameObject;
private var cardboardCont;
var speed : float;
var tilt : float;
var boundary : Boundary;

var fireBolt : GameObject;
var fireSpawn : GameObject;
var fireRate : float;

var rocketBolt : GameObject;
var rocketSpawnLeft : GameObject;
var rocketSpawnRight : GameObject;
var rocketfireRate : float;


private  var nextFire : float;
private  var rocketnextFire : float;

function Start () {
    Debug.Log(carboardObject);

}



function Update() {
    
        if(Input.GetButton("Fire1") && Time.time > nextFire){
           Instantiate(fireBolt,fireSpawn.transform.position,fireSpawn.transform.rotation);
           nextFire = Time.time + fireRate;
         
        };


        if(Input.GetButton("Fire1") && Time.time > rocketnextFire){
            Instantiate(rocketBolt,rocketSpawnLeft.transform.position,rocketSpawnLeft.transform.rotation);
            Instantiate(rocketBolt,rocketSpawnRight.transform.position,rocketSpawnRight.transform.rotation);
            rocketnextFire = Time.time + rocketfireRate;
        };
}

function FixedUpdate () {
    var moveHorizontal : float = Input.GetAxis('Horizontal');
    var moveVertical : float = Input.GetAxis('Vertical');

    var player = GetComponent.<Rigidbody>();
    var movement : Vector3 = new Vector3(moveHorizontal,0.0f,moveVertical);
    player.velocity = movement * speed;

    player.rotation = Quaternion.Euler(0f, 0f,  player.velocity.x * -tilt);

    player.position = new Vector3(
        Mathf.Clamp(player.position.x, boundary.xMin, boundary.xMax),
        0.0f,
        Mathf.Clamp(player.position.z, boundary.zMin, boundary.zMax)
    );
}
