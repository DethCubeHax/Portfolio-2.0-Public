import { useState } from 'react'
import './App.css'
import PageRoutes from './PageRoutes.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <PageRoutes />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
