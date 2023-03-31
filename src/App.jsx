import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Header from './Component/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
    </div>
  )
}

export default App
