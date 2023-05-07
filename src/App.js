// import logo from './logo.svg';
// import './App.css';
// import { ShowList, ShowSummary } from './Display';

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
//     // <ShowList/>
   
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { ShowList, ShowSummary } from './Display';

function App() {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data.map(item => item.show)));
  }, []);

  function handleShowClick(id) {
    const selected = shows.find(show => show.id === id);
    setSelectedShow(selected);
  }

  return (
    <div>
      {selectedShow ? (
        <ShowSummary show={selectedShow} />
      ) : (
        <ShowList shows={shows} onShowClick={handleShowClick} />
      )}
    </div>
  );
}

export default App;