import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import About from "./components/About";
import SignUp from "./components/register/SignUp";
import Header from "./components/Header";
import Login from "./components/register/Login";
import Protected from "./components/Protected";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Protected />}> */}
        <Route exact path="/home" element={<Home />} />
        {/* </Route> */}
        {/* <Route path="/" element={<Protected />}> */}
        <Route exact path="/products" element={<Products />} />
        {/* </Route> */}
        {/* <Route path="/" element={<Protected />}> */}
        <Route exact path="/products/:id" element={<ProductDetail />} />
        {/* </Route> */}
        {/* <Route path="/" element={<Protected />}> */}
        <Route exact path="/cart" element={<Cart />} />
        {/* </Route> */}
        {/* <Route path="/" element={<Protected />}> */}
        <Route exact path="/checkout" element={<Checkout />} />
        {/* </Route> */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
