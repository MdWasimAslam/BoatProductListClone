import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Add from './Pages/Add';
import Home from "./Pages/Home"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App