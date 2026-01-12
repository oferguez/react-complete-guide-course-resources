import { React, forwardRef, useRef } from 'react';
import Player from './components/Player.jsx';

// Define a functional component that uses forwardRef
const Button = forwardRef((props, ref) => {
  return <button ref={ref}>{props.label}</button>;
});

const Input = forwardRef( (props, ref) => {
  // Todo: Accept forwarded ref and "connect" it to the <input> element
  return (
    <p className="control">
      <label>{props.label}</label>
      {/* Todo: "Forward" remaining props to <input> element */}
      <input ref={ref} {...props} />
    </p>
  )} 
);



function App() {

  const buttonRef = useRef(); // Create a ref using the useRef hook
  const i1 = useRef();
  const i2 = useRef();

  const fetchInputs = () => {
    console.log(`i1: ${i1.current.value} i2: ${i2.current.value}`)
  };


  return (
    <>
      <Player />
      <div id="challenges">
        <Button ref={buttonRef} label='Ciao' />
        <button onClick={fetchInputs}>Get the inputs</button>
        <Input ref={i1} label='Some input'></Input>
        <Input ref={i2} label='Some other input'></Input>
      </div>
    </>
  );
}

export default App;






// return (
//   <div>
//     {/* Pass the ref to the Button component */}
//     <Button ref={buttonRef} label="Click Me" />
//     <button onClick={focusButton}>Focus on the above Button</button>
//   </div>
// );
// };


