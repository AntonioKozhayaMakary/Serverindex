import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Navbar from './components/Navbar'
import ProductContainer from './components/ProductContainer';
import { useState , useEffect} from 'react';


function App() {

  const[Products,setProducts]=useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products')
      const json = await response.json()

      if (response.ok) {
        setProducts(json)
      }
    }

    fetchProducts()
  }, [])

 

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={
                <div className="home">
                  <Navbar />
                  <ProductContainer Products={Products} />
                </div>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
