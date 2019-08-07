import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  // state = {
  //   total: null,
  //   next: null,
  //   operation: null,
  // };

  // handleClick = buttonName => this.setState(prevState => (
  //   calculate(prevState, buttonName)
  // ))

  render() {
  // const { total, next } = this.state;
  return (
    <div className="calculator">
      <Display/>
      <ButtonPanel/>
    </div>
  );
  }
}

export default App;
