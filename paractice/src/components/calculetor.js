import calculator from '/components/calculator'

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
    export default App;