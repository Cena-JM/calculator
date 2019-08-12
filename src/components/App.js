import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './styles/App.css'

class App extends React.Component {

  render() {
  return (
    <div className="calculator">
      <Display/>
      <ButtonPanel/>
    </div>
  );
  }
}

export default App;
