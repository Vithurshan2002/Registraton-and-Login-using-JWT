import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Register'
import Home from './Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
         <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App