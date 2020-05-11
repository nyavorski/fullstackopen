import React, { useState } from "react";
import ReactDOM from "react-dom";

const Hello = ({ name, age }) => {
  // const { name, age } = props;
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were born in {bornYear()}</p>
    </div>
  );
};

// const App = () => {
//   const name = "Peter";
//   const age = 10;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));

/**Re-render page with state */
// const App = (props) => {
//   const [counter, setCounter] = useState(0);
//   setTimeout(() => setCounter(counter + 1), 1000);
//   console.log("rendering...", counter);
//   return <div>{counter}</div>;
// };

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = (props) => {
  const [counter, setCounter] = useState(0);

  // const handleClick = () => {
  //   console.log("clicked");
  // };

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter}></Display>
      <Button handleClick={increaseByOne} text="plus"></Button>
      <Button handleClick={setToZero} text="zero"></Button>
      <Button handleClick={decreaseByOne} text="minus"></Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
