import React from 'react';
import Introduction from './components/Heading';
import HeadingRole from './components/test-props';
import logo from './logo.svg';
import './App.css';
import Data from './components/test-props';

function App() {
  const myDataFunction = (args: string): string => {
    return 'I am a ' + args;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Introduction />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
           <Data name="John Doe" ageHolder="45" sex="male" address="White House" callBackMethod={myDataFunction} />
      </header>
    </div>
  );
}

export default App;
