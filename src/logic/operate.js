import Big from 'big.js';

const operate = (numOne, numTwo, operator) => {
  switch (operator) {
    case '+':
      return (Big(numOne).plus(Big(numTwo))).toString();
    case '-':
      return (Big(numOne).minus(Big(numTwo))).toString();
    case 'x':
      return (Big(numOne).times(Big(numTwo))).toString();
    case '/':
      return (Big(numOne).div(Big(numTwo))).toString();
    default:
      return (Big(numOne).mod(Big(numTwo))).toString();
  }
};

export default operate;