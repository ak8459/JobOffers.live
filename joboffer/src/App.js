
import './App.css';
import SideBar from './components/SideBar.component';
import List from './components/List.component';
import SearchBar from './components/SearchBar.component';
import { useState } from 'react';
function App() {

  return (
    <div className="App">
      <SearchBar />
      <div style={{ display: 'flex', marginTop: '50px', justifyContent: 'space-between', width: '80%', margin: 'auto' }}>
        <List />
      </div>
    </div >
  );
}

export default App;
