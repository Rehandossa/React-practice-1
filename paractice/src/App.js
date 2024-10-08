import "./App.css";
import Profile from "./components/profile";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";

function App() {
  const initialdata =({
      Result: "",
      Number1: "",
      Number2: ""
    });

    const [data, setData] = useState(initialdata);

  //  (e)=>{
  //   setData( {...data, Number1:parseFloat(e.target.value)})
  //  }

    const UpdateResult = (action) => {
      if (action == 'add') {
        setData({ ...data, Result: data.Number1 + data.Number2 });
      } else if (action == 'sub') {
        setData({ ...data, Result: data.Number1 - data.Number2 });
      }
       else if (action == 'mult') {
        setData({ ...data, Result: data.Number1 * data.Number2 });
      }
       else if (action == 'div') {
        setData({ ...data, Result: data.Number1 / data.Number2 });
      }
       else {
        setData({initialdata})
      }
    }

    const UpdateNumber1 = (e) => {
        setData({ ...data, Number1: e.target.value });
        setData( {...data, Number1:parseInt(e.target.value)})
    }
    const UpdateNumber2 = (e) => {
        setData({ ...data, Number2: e.target.value });
        setData( {...data, Number2:parseInt(e.target.value)})
    }
  return (
    <div className="container ">
      <div className="card p-3">
      <h1>Results: {data.Result}</h1>
      <div className="dis-f">
      <label>Value 1:-</label>
      <input className="m-5" type="number" placeholder="Value one" onChange={UpdateNumber1}  value={data.Number1}/>
      <label>Value 2</label>
      <input className="m-5" type="number" placeholder="Value Two"  onChange={UpdateNumber2} value={data.Number2}/>
      </div>
      <div className="dis-f">
      <input className="m-5 p-5 fs-1" type="button" value={"+"} placeholder="Value Two" onClick={()=>UpdateResult('add')}/>
      <input className="m-5 p-5 fs-1" type="button" value={"-"} placeholder="Value Two" onClick={()=>UpdateResult('sub')}/>
      <input className="m-5 p-5 fs-1" type="button" value={"*"} placeholder="Value Two" onClick={()=>UpdateResult('mult')}/>
      <input className="m-5 p-5 fs-1" type="button" value={"/"} placeholder="Value Two" onClick={()=>UpdateResult('div')}/>
      <input className="m-5 p-5 fs-1" type="button" value={"c"} placeholder="Value Two" onClick={()=>UpdateResult('c')}/>
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
