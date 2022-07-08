import React from "react";
import "./Menu.css";

const Menu = ({ menuItems }) => {
  return (
    <div className="main-container">
      {menuItems.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <div className="menu-container" key={id}>
            <img src={img} alt="" />
            <div className="info">
              <header>
                <h4>{title}</h4>
                <h3>${price}</h3>
              </header>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
