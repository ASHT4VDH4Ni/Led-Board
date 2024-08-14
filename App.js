// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




// src/App.js
import React from 'react';
import LEDBoard from './components/LEDBoard';

const App = () => {
  return (
    <div className="App">
      <h1>LED Light Board</h1>
      <LEDBoard rows={5} cols={69} message="A" /> {/* Adjust message and board size */}
    </div>
  );
};

export default App;

// 251:- Yari Road  C:\Users\asus\Desktop\FOG\finalboard\src\assets\glass.png
