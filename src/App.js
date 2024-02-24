import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import Select from './components/Select';
import SongList from './components/SongList';
import NewSongForm from './components/NewSongForm';

function App() {
  const [show, setShow] = useState(true);
  // ako je show true, ispisi mi counter, to znace ova dva znaka &&
  return (
    <div className="App">
      {/* {show && <Counter />} 
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      <Select /> */}
      <SongList />
      {/* <NewSongForm /> */}
    </div>
  );
}

export default App;
