import { useState } from 'react'

import './App.css'
import Home from './Components/Home'
import BlogPage from './Components/BlogPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Home/>

     
   
     </div>

     
    </>
  )
}

export default App
