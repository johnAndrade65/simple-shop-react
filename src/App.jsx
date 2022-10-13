import './App.css'
import './components/header/Header'
import Header from './components/header/Header'
import Products from './components/products/Products'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
