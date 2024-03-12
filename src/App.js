import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Add_Product from "./pages/Add_Product/Add_Product";
import BasicCalendar from "./pages/BasicCalendar/BasicCalendar.tsx";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Product from "./pages/Product/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/orders" element={<Order/>}/>
        <Route path="/add_product" element={<Add_Product/>}/>
        <Route path="/calendar" element={<BasicCalendar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
