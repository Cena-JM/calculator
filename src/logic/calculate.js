import operate from './operate'
const calculate = (data, buttonName) => {
  let newData = Object.assign({}, data);

  switch (buttonName) {
    case 'AC':
    newData = {
      total: '0',
      next: null,
      operation: null,
      error: null,
    };
    break;

    case '+/-':
    if (data.next) {
      newData.next = (newData.next * -1).toString();
    } else {
      newData.total = (newData.total * -1).toString();
    }
    break;

    case '.':
      if (data.operation) {
        if (data.operation === '=') {
          newData = {
          total: '0.',
          next: null,
          operation: null,
          error: null,
        };
      } else if (newData.next === null) {
        newData.next = '0.';
      } else if (!data.next.split('').includes('.')) {
        newData.next += '.';
      }
      } else if (newData.total === null) {
        newData.total = '0.';
      } else if (!data.total.split('').includes('.')) {
        newData.total += '.';
      }
      break;

    case '+':
    case '-':
    case 'x':
    case '÷':
    case '%':
      if (newData.total === null || newData.total === '0') {
        newData.total = '0';
        newData.operation = buttonName;
      } else if (newData.next === null) {
        newData.operation = buttonName;
      } else if (newData.next === '0' && (newData.operation === '÷' || newData.operation === '%')) {
        newData = {
        total: null,
        next: null,
        operation: null,
        error: 'error',
        };
      } else {
        newData.total = operate(newData.total, newData.next, newData.operation);
        newData.operation = buttonName;
        newData.next = null;
      }
      break;

    case '=':
      if (newData.next === '0' && (newData.operation === '÷' || newData.operation === '%')) {
        newData = {
        total: null,
        next: null,
        operation: null,
        error: 'error',
        };
      } else if (newData.next) {
        newData.total = operate(newData.total, newData.next, newData.operation);
      }

      newData.operation = '=';
      newData.next = null;
      break;

      default:
      if (data.operation) {
        if (data.operation === '=') {
        newData = {
            total: buttonName,
            next: null,
            operation: null,
        };
        } else {
        newData.next = newData.next === null || newData.next === '0'
            ? buttonName
            : newData.next + buttonName;
        }
      } else {
        newData.total = newData.total === null || newData.total === '0'
        ? buttonName
        : newData.total + buttonName;
      }
      break;
}

return newData;

}

export default calculate;