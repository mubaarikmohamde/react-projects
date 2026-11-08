import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hello from './mub.jsx'
import Hunt from './Aar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hello/>
     <Hunt/>
    </>
    
  )
}

export default App
