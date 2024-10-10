import React, { useState }

function calculator() {
  const initialdata = {
    Result: "",
    Number1: "",
    Number2: "",
  };

  const [histories, sethistory]= useState([])

  const [data, setData] = useState(initialdata);

  //  (e)=>{
  //   setData( {...data, Number1:parseFloat(e.target.value)})
  //  }

  const clearhistory = (e) => {
    sethistory([])
  };

  const UpdateResult = (action) => {
    if (action == "add") {
      const Result = data.Number1 + data.Number2;
      setData({ ...data, Result: Result });
      const newhistory = data.Number1+"+"+data.Number2+"="+Result
      sethistory ((his)=>[newhistory, ...his])
    } else if (action == "sub") {
      const Result = data.Number1 - data.Number2;
      setData({ ...data, Result: Result });
      const newhistory = data.Number1+"-"+data.Number2+"="+Result
      sethistory ((his)=>[newhistory, ...his])
    } else if (action == "mult") {
      const Result = data.Number1 * data.Number2;
      setData({ ...data, Result: Result });
      const newhistory = data.Number1+"*"+data.Number2+"="+Result
      sethistory ((his)=>[newhistory, ...his])
    } else if (action == "div") {
      const Result = data.Number1 / data.Number2;
      setData({ ...data, Result: Result });
      const newhistory = data.Number1+"/"+data.Number2+"="+Result
      sethistory ((his)=>[newhistory, ...his])
    } else {
      setData({ initialdata });
    }
  };

  const UpdateNumber1 = (e) => {
    setData({ ...data, Number1: e.target.value });
    setData({ ...data, Number1: parseInt(e.target.value) });
  };
  const UpdateNumber2 = (e) => {
    setData({ ...data, Number2: e.target.value });
    setData({ ...data, Number2: parseInt(e.target.value) });
  };
  return (
    <div className="container ">
      <div className="dis-f">
        <div className="card p-3 row-8">
          <h1>Results: {data.Result}</h1>
          <div className="dis-f">
            <label>Value 1:-</label>
            <input
              className="m-5"
              type="number"
              placeholder="Value one"
              onChange={UpdateNumber1}
              value={data.Number1}
            />
            <label>Value 2</label>
            <input
              className="m-5"
              type="number"
              placeholder="Value Two"
              onChange={UpdateNumber2}
              value={data.Number2}
            />
          </div>
          <div className="dis-f">
            <input
              className="m-5 p-5 fs-1"
              type="button"
              value={"+"}
              placeholder="Value Two"
              onClick={() => UpdateResult("add")}
            />
            <input
              className="m-5 p-5 fs-1"
              type="button"
              value={"-"}
              placeholder="Value Two"
              onClick={() => UpdateResult("sub")}
            />
            <input
              className="m-5 p-5 fs-1"
              type="button"
              value={"*"}
              placeholder="Value Two"
              onClick={() => UpdateResult("mult")}
            />
            <input
              className="m-5 p-5 fs-1"
              type="button"
              value={"/"}
              placeholder="Value Two"
              onClick={() => UpdateResult("div")}
            />
            <input
              className="m-5 p-5 fs-1"
              type="button"
              value={"c"}
              placeholder="Value Two"
              onClick={() => UpdateResult("c")}
            />
          </div>
        </div>
        <div className="card row-12">
          <h1>Histories</h1>
          <ol>
            { 
              histories.map((History, key) => (
                <li key={key}>{History}</li>
            ))}
          </ol>
          <input className="w-20" type="button" value={"clear History"} onClick={clearhistory} />
        </div>
      </div>
    </div>
  );
}

export default calculator;