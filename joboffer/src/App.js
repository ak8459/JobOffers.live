
import './App.css';
import SideBar from './components/SideBar.component';
import List from './components/List.component';
import SearchBar from './components/SearchBar.component';
import { useState } from 'react';
function App() {
  const [colors, setColors] = useState([]);
  const [shapes, setShapes] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [input, setInput] = useState('');
  return (
    <div className="App">
      <SearchBar input={input} setInput={setInput} />
      <div style={{ display: 'flex', marginTop: '50px', justifyContent: 'space-between', width: '80%', margin: 'auto' }}>
        <SideBar colors={colors} setColors={setColors}
          shapes={shapes} setShapes={setShapes}
          sizes={sizes} setSizes={setSizes} />
        <hr width="1" size="500" />
        <List />
      </div>
    </div >
  );
}

export default App;
