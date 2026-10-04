import './CartComponent.css';
import type { CartItem } from '../App';

interface CartProps {
  items: CartItem[];
}

function CartComponent({ items }: CartProps) {
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="cart-dropdown">
        <p className="cart-empty">Your cart is empty 🍔</p>
      </div>
    );
  }

  return (
    <div className="cart-dropdown">
      <h4 className="cart-title">Your Cart</h4>

      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.product.key} className="cart-item">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="cart-item-img"
            />
            <div className="cart-item-info">
              <span className="cart-item-name">{item.product.name}</span>
              <span className="cart-item-meta">
                {item.quantity} × ₱{item.product.price}
              </span>
            </div>
            <span className="cart-item-total">
              ₱{item.product.price * item.quantity}
            </span>
          </li>
        ))}
      </ul>

      <div className="cart-footer">
        <span>Total</span>
        <strong>₱{totalPrice}</strong>
      </div>
    </div>
  );
}

export default CartComponent;