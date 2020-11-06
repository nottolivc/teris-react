import React from 'react'
import Tetris from './components/Tetris'
import 'tachyons/css/tachyons.min.css'

const App= () => (
 <div className ="fl w-100 pa2 center">
  <div className="App">
    <h1 style={{textAlign: "center", color: "#333"}}>You know what it is. Old school Keyboard Tetris. </h1>
    <Tetris/>
  </div>
  </div>


); 
export default App