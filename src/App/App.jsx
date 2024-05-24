import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import keysNumber from './logic'
import { myColor, myPet } from './logic'
import './App.css'
import Header from '../Header/Header'
import Panda from '../Panda/Panda'

function App() {
  const [count, setCount] = useState(0)

  console.log("My Color:", myColor)
  console.log('My Pet is a:', myPet)
  console.log("Default Export: ", keysNumber)

  let updateCounter = () => setCount((count) => count + 1)

  return (
    <>
      <div>
        
        {/* ! ADD HEADER RIGHT HERE... */}
        <Header 
          title="My Cool App"
          subtitle="Key has it on lock!"
          slogan="The best app on the block"
        />
        <Panda 
          disposition="friendly" 
          name="Regi"
        /> {/* Panda() */}
        <Panda 
          disposition="mean"
          name="Regina"
        /> {/* Panda() */}
        <Panda /> {/* Panda() */}

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={updateCounter}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
