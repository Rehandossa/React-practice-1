import React from "react";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

function Profile({profile}) {
  return (  
      <Card className="col-md-4 m-3" style={{ width: "18rem", display: "flex" }}>
        <Card.Img
          variant="top"
          src={profile.img}
        />
        <Card.Body>
          <Card.Title>{profile.name}</Card.Title>
          <Card.Text>{profile.About}</Card.Text>
          <Card.Link href={profile.profileUrl} target="_blank"><Button variant="primary">View {profile.name}'s Profile </Button></Card.Link>
        </Card.Body>
      </Card>
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
