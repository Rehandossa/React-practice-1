import "./App.css";
import Profile from "./components/profile";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({
      Result: "",
      Number1: "",
      Number2: ""
    });

    const UpdateNumber1 = (e) => {
        setData({ ...data, Result: e.target.value });
    }
    const UpdateNumber2 = (e) => {
        setData({ ...data, Result: e.target.value });
    }
  return (
    <div className="container ">
      <div className="card">
      <h1>Results:</h1>
      <div className="dis-f">
      <input className="m-5" type="text" placeholder="Value one" onChange={UpdateNumber1}/>
      <input className="m-5" type="text" placeholder="Value Two" onChange={UpdateNumber2}/>
      </div>
      <div className="dis-f">
      <input className="m-5 p-5 fs-2" type="button" placeholder="Value Two" onChange={UpdateNumber2}/>
      <input className="m-5 p-5 fs-2" type="button" placeholder="Value Two" onChange={UpdateNumber2}/>
      <input className="m-5 p-5 fs-2" type="button" placeholder="Value Two" onChange={UpdateNumber2}/>
      <input className="m-5 p-5 fs-2" type="button" placeholder="Value Two" onChange={UpdateNumber2}/>
      <input className="m-5 p-5 fs-2" type="button" placeholder="Value Two" onChange={UpdateNumber2}/>
      </div>
      </div>
    </div>
  )


































}

export default App;
  // const [data, setData] = useState({
  //   name: "",
  //   Loginpassword: "",
  //   Email: "",
  // });

  // const [isEmpty, setIsEmpty] = useState(true);

  // // const [profiles, setProfiles] = useState([]);
  // // useEffect(() => {
  // //   fetch('/data/Profile.json')
  // //     .then((response) => response.json())
  // //     .then((data) => setProfiles(data))
  // //     .catch((error) => console.error("Error fetching the profiles:", error));
  // // }, []);

  // const UpdateName = (e) => {
  //   setData({ ...data, name: e.target.value });
  //   setIsEmpty(
  //     e.target.value == "" && data.Email == "" && data.Loginpassword == ""
  //       ? true
  //       : false
  //   );
  // };
  // const UpdateEmail = (e) => {
  //   setData({ ...data, Email: e.target.value });
  //   setIsEmpty(
  //     data.name == "" && e.target.value == "" && data.Loginpassword == ""  
  //       ? true
  //       : false
  //   );
  // };
  // const UpdateLoginPassword = (e) => {
  //   setData({ ...data, Loginpassword: e.target.value });
  //   setIsEmpty(
  //     data.name == "" && data.Email == "" && e.target.value == ""
  //       ? true
  //       : false
  //   );
  // };

  // return (
  //   <div className="container ">
  //     <h1>Hello</h1>
  //     {isEmpty ? (
  //       <h1>No Data</h1>
  //     ) : (
  //       <>
  //         {data.name != "" ? <h1>Name: {data.name}</h1> : <></>}
  //         {data.Email != "" ? <h1>Email: {data.Email}</h1> : <></>}
  //         {data.Loginpassword != "" ? (
  //           <h1>Login password: {data.Loginpassword}</h1>
  //         ) : (
  //           <></>
  //         )}
  //       </>
  //     )}
  //     <input
  //       type="text"
  //       placeholder="Name"
  //       onChange={UpdateName}
  //     />
  //     <input
  //       type="email"
  //       placeholder="Email"
  //       onChange={UpdateEmail}
  //     />
  //     <input
  //       type="password"
  //       placeholder="Login password"
  //       onChange={UpdateLoginPassword}
  //     />
  //   </div>
  // );

  // return (
  //   <div className="container mt-5 mb-5">
  //     <div className="row">
  //       <h1 className="mb-5">GitHubs Profile</h1>
  //       {profiles.map((profile, key) => {
  //         return <Profile key={key} profile={profile} />;
  //       })}
  //     </div>
  //   </div>
  // );


// export default App;
