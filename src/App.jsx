import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BMICalculator from './BMICalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BMICalculator />
    </div>
  )
}

export default App
