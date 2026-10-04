import { useState } from 'react';
import { createPortal } from 'react-dom';
import './App.css';

import NavigationComponent from './Components/NavigationComponent';
import ShopName from './Components/ShopNameComponent';
import ProductList from './Data/ProductList';
import ProductComponent from './Components/ProductComponent';
import ProductUI from './Components/ProductUIComponent';

import type { Product } from './Data/ProductList';

export interface CartItem {
  product: Product;
  quantity: number;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);
  const [portalTarget, setPortalTarget] = useState<HTMLDivElement | null>(null);

  const handleAddToCart = (quantity: number) => {
    if (!selectedItem) return;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.key === selectedItem.key);
      if (existing) {
        return prev.map((item) =>
          item.product.key === selectedItem.key
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product: selectedItem, quantity }];
    });
  };

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <NavigationComponent items={totalCount} cartItems={cartItems} />

      <div className="shop-name">
        <ShopName />
      </div>

      <div className="main-content">
        <div className="product-menu">
          {ProductList.map((product) => (
            <ProductComponent
              key={product.key}
              product={product}
              onClick={setSelectedItem}
            />
          ))}
        </div>

        <div className="product-details-slot" ref={setPortalTarget} />
      </div>

      {portalTarget &&
        createPortal(
          <div className="product-details">
            {selectedItem ? (
              <ProductUI
                product={selectedItem}
                onAddToCart={handleAddToCart}
              />
            ) : (
              <p>Select a burger to view its details.</p>
            )}
          </div>,
          portalTarget
        )}
    </>
  );
}

export default App;