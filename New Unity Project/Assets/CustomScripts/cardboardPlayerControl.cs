using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class cardboardPlayerControl : MonoBehaviour
{
    [System.Serializable]
    public class Boundary
    {
        float Xmin, Xmax;
    }


    public float speed;
    public float tilt;
    public Boundary boundary;
    private static CardboardControl cardboard;
    private bool evenLaser = false;
    public GameObject shot;
    public ParticleSystem ps;


    // Use this for initialization
    void Start()
    {
        cardboard = GameObject.Find("CardboardControlManager").GetComponent<CardboardControl>();
        cardboard.box.OnTilt += CardBoardOnTilt;
        cardboard.trigger.OnDown += CardBoardOnDown;
        cardboard.trigger.OnUp += CardBoardOnUp;

    }

    void FixedUpdate()
    {

        float moveHorizontal = Input.GetAxis("Horizontal");
        Vector3 movement = new Vector3(moveHorizontal, 0, 0);
        GetComponent<Rigidbody>().velocity = movement * speed;

        GetComponent<Rigidbody>().position = new Vector3(
         Mathf.Clamp(GetComponent<Rigidbody>().position.x, -2, 2), 0, 0
         );

    }

    // Update is called once per frame
    void Update()
    {

    }

    private void CardBoardOnTilt(object sender)
    {
        Debug.Log("tilted");
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);

    }

    void CardBoardOnDown(object sender)
    {
        GameObject cannon = GameObject.Find("cannonSpawn");

        Vector3 position = cannon.transform.position;
        position -= new Vector3(0.5f, 1.5f, 0.5f);
        //   Vector3 offset = cardboard.gaze.Right() * 2f;
        //      position += evenLaser ? offset : -offset;
        //     evenLaser = !evenLaser;
        Vector3 rotation = cardboard.gaze.Rotation().eulerAngles;
        rotation.x += 90f;
        Instantiate(shot, cannon.transform.position, Quaternion.Euler(rotation));
        ps.Simulate(0.1f, true, true);

    }

    void CardBoardOnUp(object sender)

    {
        ps.Simulate(0.0f, true, true);
    }
}

