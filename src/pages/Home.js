import React from "react";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Menus from "../components/menus/Menus";
import data from "../helper/data";
import { useState } from "react";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];
// console.log(allCategories);

const Home = () => {
  const [menuItems, setMenuItems] = useState(data);
  const filterItems = (categoryItem) => {
    if (categoryItem === "all") {
      setMenuItems(data);
    } else {
      const filtered = data.filter((item) => item.category === categoryItem);
      setMenuItems(filtered);
    }
  };
  return (
    <div>
      <Header />
      <Categories allCategories={allCategories} filterItems={filterItems} />
      <Menus menuItems={menuItems} />
    </div>
  );
};

export default Home;
