import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './styles/App.css'

class App extends React.Component {

  state = { total: null, next: null, operation: null, error: null };

  handleClick = buttonName => this.setState(prevState => (calculate(prevState, buttonName)));

  render() {
    const { total, next, error } = this.state;
    return (
      <div className="calculator">
        <Display result={total} next={next} error={error} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
