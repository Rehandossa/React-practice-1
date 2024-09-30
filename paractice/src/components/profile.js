import React from "react";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

function Profile({ name, pic, About,profileUrl }) {
  return (
    <div>
      <Card className="mb-5" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={pic}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{About}</Card.Text>
          <Card.Link href={profileUrl} target="_blank"><Button variant="primary">View {name}'s Profile </Button></Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
{
  /* <div className="profile">
                <p className="name">MY NAME IS {name}</p>
                <img className="Profile"src={pic} alt=""/>
                <p className="about">{About}</p>
            </div> */
}
