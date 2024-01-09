
import { useState } from 'react'
import './App.css'

function App() {
      const [color, setColor] = useState("white")

  return (
    <div className='my-bg' style={{backgroundColor: color}}>
       <div className='btn-wrapper'>
          <div className="main-btn">
            <button style={{background: "red"}} onClick={() => setColor("red")}>Red</button>
            <button style={{background: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
            <button style={{background: "blue"}} onClick={() => setColor("blue")}>Blue</button>
            <button style={{background: "gray"}} onClick={() => setColor("gray")}>Gray</button>
            <button style={{background: "white"}} onClick={() => setColor("black")}>Black</button>
            <button style={{background: "olive"}} onClick={() => setColor("olive")}>Olive</button>
          </div>
       </div>
    </div>
  )
}

export default App
