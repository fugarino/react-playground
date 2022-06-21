import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroCard from "./components/HeroCard/HeroCard";
import ItemsList from "./components/ItemsList/ItemsList";
import CartModal from "./components/CartModal/CartModal";
import "./App.css";

const menuItemsData = [
  {
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function App() {
  const [itemCount, setItemCount] = useState(0);
  const [cartActive, setCartActive] = useState(false);
  const [addedMeals, setAddedMeals] = useState([]);

  const handleAdd = (itemData) => {
    setItemCount((prevItemCount) => {
      return prevItemCount + Number(itemData.amount);
    });

    // setAddedMeal(JSON.stringify(itemData));
    setAddedMeals((prevAddedMeals) => {
      return [...prevAddedMeals, itemData];
    });
  };

  const toggleCart = () => {
    setCartActive((prevCartActive) => {
      return (prevCartActive = !prevCartActive);
    });
  };

  return (
    <div className="App">
      {cartActive && <CartModal toggleCart={toggleCart} addedMeals={addedMeals} />}
      <Navbar heading="ReactMeals" itemCount={itemCount} toggleCart={toggleCart} />
      <HeroCard
        heading="Delicious Food, Delivered To You"
        text1="Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."
        text2="All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"
      />
      <ItemsList menuItems={menuItemsData} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
