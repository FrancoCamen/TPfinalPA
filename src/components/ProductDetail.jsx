import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

const ProductDetail = ({ balance, setBalance }) => {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) return <p>Producto no encontrado</p>;

  const handlePurchase = () => {
    const totalCost = product.cost;
    if (balance >= totalCost) {
      setBalance(balance - totalCost);
      alert("Compra exitosa");
    } else {
      alert("Saldo insuficiente para completar la compra");
    }
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.img.hdUrl} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p>
            <strong>Cost:</strong> {product.cost} points
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <button className="buy-button" onClick={handlePurchase}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

