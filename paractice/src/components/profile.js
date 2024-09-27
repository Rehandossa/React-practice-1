import React from "react";

function Profile({name,pic,About}) {
    return (
        <div>
            <div className="profile">
                <p className="name">MY NAME IS {name}</p>
                <img className="Profile"src={pic} alt=""/>
                <p className="about">{About}</p>
            </div>
        </div>
   );    
}

export default Profile;