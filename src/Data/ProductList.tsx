import classicBurger from '../Resources/Images/classic-burger.jpg';
import cheeseBurger from '../Resources/Images/cheese-burger.jpg';
import baconBurger from '../Resources/Images/bacon-burger.jpg';
import doubleBurger from '../Resources/Images/double-burger.jpg';
import chickenBurger from '../Resources/Images/chicken-burger.jpg';
import bbqBurger from '../Resources/Images/bbq-burger.jpg';
import spicyBurger from '../Resources/Images/spicy-burger.jpg';
import mushroomBurger from '../Resources/Images/mushroom-burger.jpg';

export interface Product {
  key: number;
  image: string;
  name: string;
  description: string;
  ingredients: string;
  stocks: number;
  price: number;
}

const burgers: Product[] = [
  {
    key: 1,
    image: classicBurger,
    name: "Burger Ka Sakin, Burger",
    description: "A juicy beef patty with fresh lettuce, tomato, onion, and our signature sauce.",
    ingredients: "Beef patty, burger bun, lettuce, tomato, onion, mayonnaise, ketchup",
    stocks: 15,
    price: 99
  },
  {
    key: 2,
    image: cheeseBurger,
    name: "Cheeseburger",
    description: "A classic beef burger topped with melted cheddar cheese and signature sauce.",
    ingredients: "Beef patty, burger bun, cheddar cheese, lettuce, tomato, onion, mayonnaise, ketchup",
    stocks: 12,
    price: 119
  },
  {
    key: 3,
    image: baconBurger,
    name: "Bacon Burger",
    description: "Juicy beef patty topped with crispy bacon, lettuce, tomato, and cheese.",
    ingredients: "Beef patty, burger bun, bacon, cheddar cheese, lettuce, tomato, mayonnaise",
    stocks: 10,
    price: 139
  },
  {
    key: 4,
    image: doubleBurger,
    name: "Double Beef Burger",
    description: "Two delicious beef patties stacked with cheese, lettuce, onions, and special sauce.",
    ingredients: "2 beef patties, burger bun, cheddar cheese, lettuce, onion, pickles, special sauce",
    stocks: 8,
    price: 169
  },
  {
    key: 5,
    image: chickenBurger,
    name: "Crispy Chicken Burger",
    description: "Crispy fried chicken fillet with lettuce, tomato, and creamy mayonnaise.",
    ingredients: "Crispy chicken fillet, burger bun, lettuce, tomato, mayonnaise, cheese",
    stocks: 14,
    price: 129
  },
  {
    key: 6,
    image: bbqBurger,
    name: "BBQ Burger",
    description: "Grilled beef patty topped with cheddar cheese, crispy onions, and smoky BBQ sauce.",
    ingredients: "Beef patty, burger bun, cheddar cheese, crispy onions, lettuce, BBQ sauce, mayonnaise",
    stocks: 9,
    price: 149
  },
  {
    key: 7,
    image: spicyBurger,
    name: "Spicy Burger",
    description: "A flavorful beef patty with jalapeños, cheese, lettuce, and spicy special sauce.",
    ingredients: "Beef patty, burger bun, cheddar cheese, jalapeños, lettuce, onion, spicy sauce, mayonnaise",
    stocks: 7,
    price: 139
  },
  {
    key: 8,
    image: mushroomBurger,
    name: "Mushroom Burger",
    description: "Juicy beef patty topped with sautéed mushrooms, melted cheese, and creamy sauce.",
    ingredients: "Beef patty, burger bun, sautéed mushrooms, cheddar cheese, lettuce, onion, creamy mushroom sauce",
    stocks: 11,
    price: 149
  }
];

export default burgers;