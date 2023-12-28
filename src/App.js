import './App.css';
import Home from './components/Home';
import {Route, Routes} from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import About from './components/About';
import SignUp from './components/register/SignUp';
import Header from './components/Header';

function App() {
  return (
  <>
  <Header />
  <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/products' element={<Products/>} />
    <Route exact path='/products/:id' element={<ProductDetail/>} />
    <Route exact path="/cart" element={<Cart />} />
    <Route exact path="/checkout" element={<Checkout/>} />
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/register" element={<SignUp />} />
  </Routes>
  </>
  );
}

export default App;
