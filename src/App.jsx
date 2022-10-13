import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/HomePage/index'
import Products from './pages/ProductsPage/index'

function App() {
  return (
    <div className="App">
      

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
