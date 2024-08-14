import React, { useState, useEffect } from 'react';
import LED from './LED';
import './LEDBoard.css';

const LEDBoard = ({ rows, cols, message }) => {
  const [board, setBoard] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(false))
  );
  const [offset, setOffset] = useState(cols);
  const patterns = {
        // Patterns as defined earlier...
            A: [
              [false, true, false],
              [true, false, true],
              [true, true, true],
              [true, false, true],
              [true, false, true],
            ],
                   B: [
                        [true, true, false],
                        [true, false, true],
                        [true, true, false],
                        [true, false, true],
                        [true, true, false],
                      ],
                      C: [
                        [false, true, true],
                        [true, false, false],
                        [true, false, false],
                        [true, false, false],
                        [false, true, true],
                      ],
                      D: [
                        [true, true, false],
                        [true, false, true],
                        [true, false, true],
                        [true, false, true],
                        [true, true, false],
                      ],
                      E: [
                        [true, true, true],
                        [true, false, false],
                        [true, true, false],
                        [true, false, false],
                        [true, true, true],
                      ],
                      F: [
                        [true, true, true],
                        [true, false, false],
                        [true, true, false],
                        [true, false, false],
                        [true, false, false],
                      ],
                      G: [
                        [false, true, true],
                        [true, false, false],
                        [true, false, true],
                        [true, false, true],
                        [false, true, true],
                      ],
                      H: [
                        [true, false, true],
                        [true, false, true],
                        [true, true, true],
                        [true, false, true],
                        [true, false, true],
                      ],
                      I: [
                        [true, true, true],
                        [false, true, false],
                        [false, true, false],
                        [false, true, false],
                        [true, true, true],
                      ],
                      J: [
                        [false, true, true],
                        [false, false, true],
                        [false, false, true],
                        [true, false, true],
                        [false, true, false],
                      ],
                      K: [
                        [true, false, true],
                        [true, true, false],
                        [true, true, false],
                        [true, false, true],
                        [true, false, true],
                      ],
                      L: [
                        [true, false, false],
                        [true, false, false],
                        [true, false, false],
                        [true, false, false],
                        [true, true, true],
                      ],
                      M: [
                        [true, false, true],
                        [true, true, true],
                        [true, true, true],
                        [true, false, true],
                        [true, false, true],
                      ],
                      N: [
                        [true, false, true],
                        [true, true, true],
                        [true, false, true],
                        [true, false, true],
                        [true, false, true],
                      ],
                      O: [
                        [false, true, false],
                        [true, false, true],
                        [true, false, true],
                        [true, false, true],
                        [false, true, false],
                      ],
                      P: [
                        [true, true, false],
                        [true, false, true],
                        [true, true, false],
                        [true, false, false],
                        [true, false, false],
                      ],
                      Q: [
                        [false, true, false],
                        [true, false, true],
                        [true, false, true],
                        [false, true, true],
                        [false, false, true],
                      ],
                      R: [
                        [true, true, false],
                        [true, false, true],
                        [true, true, false],
                        [true, true, false],
                        [true, false, true],
                      ],
                      S: [
                        [false, true, true],
                        [true, false, false],
                        [false, true, false],
                        [false, false, true],
                        [true, true, false],
                      ],
                      T: [
                        [true, true, true],
                        [false, true, false],
                        [false, true, false],
                        [false, true, false],
                        [false, true, false],
                      ],
                      U: [
                        [true, false, true],
                        [true, false, true],
                        [true, false, true],
                        [true, false, true],
                        [false, true, false],
                      ],
                      V: [
                        [true, false, true],
                        [true, false, true],
                        [true, false, true],
                        [false, true, false],
                        [false, true, false],
                      ],
                      W: [
                        [true, false, true],
                        [true, false, true],
                        [true, true, true],
                        [true, true, true],
                        [true, false, true],
                      ],
                      X: [
                        [true, false, true],
                        [true, false, true],
                        [false, true, false],
                        [true, false, true],
                        [true, false, true],
                      ],
                      Y: [
                        [true, false, true],
                        [true, false, true],
                        [false, true, false],
                        [false, true, false],
                        [false, true, false],
                      ],
                      Z: [
                        [true, true, true],
                        [false, false, true],
                        [false, true, false],
                        [true, false, false],
                        [true, true, true],
                      ],
                      ' ': [ // Space pattern
                        [false, false, false],
                        [false, false, false],
                        [false, false, false],
                        [false, false, false],
                        [false, false, false],
                      ],
                      '0': [
                        [false, true, false],
                        [true, false, true],
                        [true, false, true],
                        [true, false, true],
                        [false, true, false],
                      ],
                      '1': [
                        [false, true, false],
                        [true, true, false],
                        [false, true, false],
                        [false, true, false],
                        [true, true, true],
                      ],
                      '2': [
                        [true, true, false],
                        [false, false, true],
                        [false, true, false],
                        [true, false, false],
                        [true, true, true],
                      ],
                      '3': [
                        [true, true, false],
                        [false, false, true],
                        [false, true, false],
                        [false, false, true],
                        [true, true, false],
                      ],
                      '4': [
                        [true, false, true],
                        [true, false, true],
                        [true, true, true],
                        [false, false, true],
                        [false, false, true],
                      ],
                      '5': [
                        [true, true, true],
                        [true, false, false],
                        [true, true, true],
                        [false, false, true],
                        [true, true, false],
                      ],
                      '6': [
                        [false, true, true],
                        [true, false, false],
                        [true, true, true],
                        [true, false, true],
                        [false, true, true],
                      ],
                      '7': [
                        [true, true, true],
                        [false, false, true],
                        [false, true, false],
                        [true, false, false],
                        [true, false, false],
                      ],
                      '8': [
                        [false, true, false],
                        [true, false, true],
                        [false, true, false],
                        [true, false, true],
                        [false, true, false],
                      ],
                      '9': [
                        [false, true, true],
                        [true, false, true],
                        [false, true, true],
                        [false, false, true],
                        [false, true, false],
                      ],
                      ':': [
                        [false, false, false],
                        [false, true, false],
                        [false, false, false],
                        [false, true, false],
                        [false, false, false],
                      ],
                      '-': [
                        [false, false, false],
                        [false, false, false],
                        [true, true, true],
                        [false, false, false],
                        [false, false, false],
                      ],
                      '.': [
                        [false, false, false],
                        [false, false, false],
                        [false, false, false],
                        [false, false, false],
                        [true, false, false],
                      ],
                      ',': [
                        [false, false, false],
                        [false, false, false],
                        [false, false, false],
                        [false, true, false],
                        [true, false, false],
                      ],
  };
  const displayMessage = (message, offset) => {
    const newBoard = Array.from({ length: rows }, () => Array(cols).fill(false));
    let colOffset = offset;

    for (const char of message) {
      const pattern = patterns[char.toUpperCase()];
      if (pattern) {
        for (let row = 0; row < pattern.length; row++) {
          for (let col = 0; col < pattern[row].length; col++) {
            if (colOffset + col >= 0 && colOffset + col < cols && row < rows) {
              newBoard[row][colOffset + col] = pattern[row][col];
            }
          }
        }
        colOffset += pattern[0].length + 1;
      }
    }

    setBoard(newBoard);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset > -message.length * 4 ? prevOffset - 1 : cols));
    }, 200);

    return () => clearInterval(interval);
  }, [message, cols]);

  useEffect(() => {
    displayMessage(message, offset);
  }, [message, offset]);

  return (
    <div className="led-board-container">
      <div className="led-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="led-row">
            {row.map((cell, colIndex) => (
              <LED key={colIndex} isOn={cell} />
            ))}
          </div>
        ))}
      </div>
      <img src={require('/Users/asus/Desktop/FOG/finalboard/src/assets/glass.png')} alt="Overlay" className="led-overlay" />
    </div>
  );
};

export default LEDBoard;
