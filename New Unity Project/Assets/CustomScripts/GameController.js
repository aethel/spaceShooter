#pragma strict



var hazards : GameObject;
var hazardsCount : int;
var hazardsSpawn : Vector3;

var spawnWait : float;
var waveWait : float;
var startWait : float;

var scoreText : GameObject;

private var score : int;

function Start() {
    score = 0;
    UpdateScore();
    SpawnWaves();
}

function SpawnWaves () {
    yield WaitForSeconds(startWait);
    while(true) {
        for ( var i : int= 0; i < hazardsCount; i++)
        {
           var spawnPosition : Vector3= new Vector3 (Random.Range (-hazardsSpawn.x, hazardsSpawn.x), hazardsSpawn.y, hazardsSpawn.z);
           var spawnRotation : Quaternion = Quaternion.identity;
            Instantiate (hazards, spawnPosition, spawnRotation);
              yield WaitForSeconds(spawnWait) ;
        }
    yield WaitForSeconds(waveWait);
    }
}

function AddScore(newScoreValue : int) {
    score += newScoreValue;
    UpdateScore();
}

function UpdateScore(){
    scoreText.GetComponent.<TextMesh>().text = "Score: " + score;
}