import React, { useState } from 'react';
import './App.css';

interface Sub{
  nick: string
  avatar: string
  subMonths:  number
  description?: string
}

function App() {
  const [subs, setSubs] = useState<Array<Sub>>([])


  return (
    <div className="App">
      <h1>List Subs</h1>
      <ul>
        {
          subs.map(sub => <li key={sub.nick}>
            <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
            <h4>{sub.nick}(<small>{sub.subMonths}</small>)</h4>
            <p>
              {sub.description?.substring(0,100)}
            </p>
          </li>)
        }
      </ul>
    </div>
  );
}

export default App;
