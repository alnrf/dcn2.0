import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Offers from "./pages/offers/Offers";
import Checkout from "./pages/checkout/Checkout";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Help from "./pages/help/Help";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:id" element={<Category />} />
        <Route path="/produto/:id" element={<Product />} />
        <Route path="/ofertas/" element={<Offers />} />
        <Route path="/carrinho/" element={<Checkout />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/registre-se/" element={<SignUp />} />
        <Route path="/ajuda/" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
