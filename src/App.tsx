import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';

const INITIAL_STATE = [
  {
    nick: 'Santi',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=Santiago',
    description: 'Soy Joan Santiago',
  },
  {
    nick: 'Nicolas',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=Alexande',
  }
]

interface AppState{
  subs: Array<Sub>
  newSubNumer: number
}

interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setnewSubsNumber] = useState<AppState["newSubNumer"]>(0)

  useEffect(()=>{
    setSubs(INITIAL_STATE)
  },[])

  return (
    <div className="App">
      <h1>List Subs</h1>
      <List subs={subs}/>
    </div>
  );
}

export default App;
