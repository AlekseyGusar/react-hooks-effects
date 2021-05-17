import React, {useState, useEffect} from 'react';
import './App.css';

export default function App() {
  const [number, setNumber] = useState('');
  useEffect(() => {
    setNumber(localStorage.getItem('appData'));
  }, [])

  return (
    <div>
      React Marathon, appData: <input size='5' defaultValue={number}></input>
    </div>
  );
}
