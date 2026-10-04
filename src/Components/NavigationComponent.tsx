import './NavigationComponent.css';
import CartComponent from './CartComponent';
import type { CartItem } from '../App';

interface NavigationProps {
  items: number;
  cartItems: CartItem[];
}

function NavigationComponent({ items, cartItems }: NavigationProps) {
  return (
    <div className="navigation">

      {/* LEFT */}
      <div className="navigation-links">
        <button>About</button>
        <button>Our Menu</button>
        <button>Shop</button>
        <button>Contact</button>
      </div>

      {/* RIGHT */}
      <div className="navigation-logo">

        {/* Cart wrapper — hover target */}
        <div className="cart-wrapper">
          <button className="cart-button">
            🛒 {items}
          </button>

          <CartComponent items={cartItems} />
        </div>

      </div>

    </div>
  );
}

export default NavigationComponent;