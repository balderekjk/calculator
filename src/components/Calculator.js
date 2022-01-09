import React, { useState } from 'react';
import '../App.css';

function Calculator() {
  let [input, setInput] = useState('');
  let [count, setCount] = useState(0);
  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'];
  const logicOps = ['+', '-', '*', '/'];

  // (isNaN(parseFloat(input.charAt(input.length - 1))))

  const handleCompute = () => {
    if (isNaN(parseFloat(input.charAt(input.length - 1)))) {
      resetState();
    } else {
      setCount(eval(input));
    }
  };

  const resetState = () => {
    setInput('');
    setCount(0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setInput('');
      return handleCompute();
    }
  };

  return (
    <div>
      <div className="calc-container">
        <div className="calc-items">
          <span>
            <input
              autoFocus
              style={{ border: 'outset 2px' }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleCompute}>=</button>
          </span>
          <div className="num-box">
            {numArray.map((num) => {
              return (
                <button onClick={() => setInput(input + num)}>
                  <div>{num}</div>
                </button>
              );
            })}
          </div>
          <div className="op-box">
            {logicOps.map((op) => {
              return <button onClick={() => setInput(input + op)}>{op}</button>;
            })}
            <button onClick={resetState}>C</button>
          </div>
          <h4 className="result">{count ? count : 0}</h4>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
