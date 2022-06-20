import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroCard from "./components/HeroCard/HeroCard";
import ItemsList from "./components/ItemsList/ItemsList";
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
  return (
    <div className="App">
      <Navbar heading="ReactMeals" />
      <HeroCard
        heading="Delicious Food, Delivered To You"
        text1="Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."
        text2="All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"
      />
      <ItemsList menuItems={menuItemsData} />
    </div>
  );
}

export default App;
