import { useState } from 'react'
import './App.css'

function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={isOn ? "off" : "on"}>
      Toggle Switch 
      <button onClick={() => setIsOn(isOn => !isOn)}>
        {isOn ? "OFF" : "ON"}
      </button>
    </div >
  )
}

export default App
