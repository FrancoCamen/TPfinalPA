import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.img.url} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.cost} points</p>
      {/* Pasar los datos del producto como state */}
      <Link to={`/product/${product._id}`} state={{ product }}>
        Ver Detalle
      </Link>
    </div>
  );
}

export default ProductCard;

