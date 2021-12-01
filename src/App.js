import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Offers from "./pages/offers/Offers";
import Checkout from "./pages/checkout/Checkout";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Help from "./pages/help/Help";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ofertas/" element={<Offers />} />
        <Route path="/checkout/" element={<Checkout />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/registre-se/" element={<SignUp />} />
        <Route path="/ajuda/" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
