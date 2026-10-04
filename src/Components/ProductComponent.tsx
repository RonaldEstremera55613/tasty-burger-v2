import './ProductComponent.css'
import type { Product } from "../Data/ProductList";

interface ProductProps {
  product: Product;
  onClick: (product: Product) => void;
}

function ProductComponent({ product, onClick }: ProductProps) {
  return (
    <div className="product-card">
      <button onClick={() => onClick(product)}>
        <img src={product.image} alt={product.name} />

        <h6>{product.name}</h6>

        <p>{product.description}</p>

        <p>₱{product.price}</p>
      </button>
    </div>
  );
}

export default ProductComponent;