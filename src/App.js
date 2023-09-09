import React, {useState} from 'react';
import './App.css';
import Shop from './components/shop';
import Display from './components/display';
import Search from './components/search';
import Bevarages from './components/bevarages'
function App() {
  const [show,setShow] = useState(true);
  const [cart , setCart] = useState([]);
  return (
    <div className="App">
        <Search size={cart.length} />
        <Shop/>
        <Display />
        <Bevarages />
    </div>
  );
}

export default App;