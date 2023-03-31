import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Header from './Component/Header/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <ToastContainer></ToastContainer>
      
    </div>
  )
}

export default App
