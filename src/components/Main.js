import React from "react";
import Card from "./Card";
import salad from "../image/salad.png";
import pasta from "../image/pasta.png";
import Dessert from "../image/Dessert.png";
import "./Main.css";

const specialsData = [
  {
    img: salad,
    title: "Salad",
    price: 15,
    description:
      "The mixture of vegetables, usually not cooked, that you often eat together with other foods",
  },
  {
    img: pasta,
    title: "pasta",
    price: 10,
    description:
      "An Italian food made from flour and water, formed into different shapes, cooked, and usually served with a sauce.",
  },
  {
    img: Dessert,
    title: "Dessert",
    price: 5,
    description:
      "A sweet that is eaten after the main part of a meal.",
  },
];

function Main() {
  const specialsCards = specialsData.map((item) => {
    return (
      <Card
        key={item.title}
        image={item.img}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <main>
      <section className="specials">
        <div className="top">
          <h1>Weekly special Food!</h1>
        </div>
        <div className="cards">{specialsCards}</div>
      </section>
      <br></br>
    </main>
  );
}

export default Main;
