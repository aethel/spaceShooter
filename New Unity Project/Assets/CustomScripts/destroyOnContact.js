#pragma strict

var playerExplosion : GameObject;
var asteroidExplosion : GameObject;
var scoreValue : int;
var fragments : GameObject;
private var gameController : GameController;


function Start(){
    var gameControllerObject : GameObject = GameObject.FindWithTag("GameController");

    if(gameControllerObject != null){
        gameController = gameControllerObject.GetComponent(GameController);
    }

    if(gameControllerObject == null){
        Debug.Log ("Cannot find 'GameController' script");
    }
}

function OnTriggerEnter(other : Collider){
    if(other.tag == "Boundary" || other.tag == "Fragment"){
        return;
    };

    Debug.Log('this is ' + gameObject.tag);
    Debug.Log('other is' + other.tag);

    Instantiate(fragments, other.transform.position, other.transform.rotation);

    if(other.tag == "Player"){
        Instantiate(playerExplosion, other.transform.position, other.transform.rotation);
        Destroy(GameObject.FindWithTag("Cannon"));
    }
    
    gameController.AddScore(scoreValue);
    Destroy(other.gameObject);
    Destroy(gameObject);
}