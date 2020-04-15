/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <>
      <p>Hello {props.name} aged {props.age} :)</p>
    </>
  )
}

const Footer = () => {
  return (
    <>
      a production of <a href="https://github.com/nyavorski">nyavorski</a>
    </>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const name = 'Billy'
  const age = 12
  console.log("turtle says hi")
  return(
  <>
    <p>Hello world at {now.toString()}</p>
    <p>{a} plus {b} is {a+b}</p>
    <h1>Greetings</h1>
    <Hello name="Bilbo" age={15+24}/>
    <Hello name={name} age={age}/>
    <Footer/>
  </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))