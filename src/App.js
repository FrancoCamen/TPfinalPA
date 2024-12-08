import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"; // Importamos el componente Navbar
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <div>
        <AppContent />
      </div>
    </Router>
  );
}

function AppContent() {

  // Estado para almacenar el saldo del usuario, recuperado desde localStorage o con un valor inicial
  const [balance, setBalance] = useState(() => {
    // Recupera el saldo desde localStorage, si existe, o usa un saldo inicial de 10000
    const savedBalance = localStorage.getItem("balance");
    return savedBalance ? JSON.parse(savedBalance) : 10000;
  });

  // Hook que guarda el saldo en localStorage cada vez que el saldo cambia
  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(balance));
  }, [balance]);

  

  return (
    <>
      <Navbar balance={balance}/>
      <Routes>
        {/* Ruta para ver los detalles de un producto específico */}
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={<ProductDetail balance={balance} setBalance={setBalance} />}
        />
      </Routes>
    </>
  );

}

export default App;
