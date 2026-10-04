import { useState } from 'react';
import './ProductUIComponent.css';
import type { Product } from '../Data/ProductList';

interface ProductUIProps {
  product: Product;
  onAddToCart: (quantity: number) => void;
}

function ProductUI({ product, onAddToCart }: ProductUIProps) {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  const increase = () => {
    setQuantity((q) => (q < product.stocks ? q + 1 : q));
  };

  const handleAdd = () => {
    onAddToCart(quantity);
    setQuantity(1); // reset after adding
  };

  return (
    <div className="product-ui">
      <img src={product.image} alt={product.name} />

      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.ingredients}</p>
      <p>Stocks: {product.stocks}</p>
      <p>₱{product.price}</p>

      <div className="qty">
        <button onClick={decrease} aria-label="Decrease quantity">-</button>
        <span>{quantity}</span>
        <button onClick={increase} aria-label="Increase quantity">+</button>
      </div>

      <button className="add-to-cart" onClick={handleAdd}>
        Add to Cart · ₱{product.price * quantity}
      </button>
    </div>
  );
}

export default ProductUI;