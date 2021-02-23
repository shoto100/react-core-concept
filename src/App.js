import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const products = [
    {name: 'photoShop', price: '69'},
    {name: 'xD', price: '420'}
  ];

  const nayoks = ["razzak", "savana", "salman", "bobita"];

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        {/* system 01 props */}
        {/* <Person name="shoto" job="developer"></Person>
        <Person name="avro" job="designer"></Person>
        <Person name="onick" job="manager"></Person>
        <Person name="dhrupo" job="pani boy"></Person> */}


        {/* system 2 props */}
        <Person name={products[0]}></Person>
        <Person name="dhrupo" job="pani boy"></Person>

        <ul> 
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      

      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  )
}

function Person(props) {
  // ---------- system 01 props -------
  // const personStyle = {
  //   border: '2px solid red',
  //   margin: '10px'
  // }

  // return (
  // <div style={personStyle}>
  //   <h1>Name - {props.name}</h1>
  //   <p>Profession - {props.job}</p>
  // </div>
  // )

  // ---------- system 02 props -------
  const personStyle = {
    border: '1px solid solid',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    color: '#333',
    margin: '5px'
  }

  return (
    <div style={personStyle}>
      
      <h3>{props.name.name}</h3>
      <h5>{props.name.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
