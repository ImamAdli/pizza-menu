import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // Inline CSS
  const style = {
    // color: "red",
    // fontSize: "48px",
    // textTransform: "uppercase",
    // textAlign: "center",
  };

  return (
    <header className="header">
      <h1 style={style}>Pizzaria React</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Daftar Menu Pizza</h2>

      {numPizzas > 0 ? (
        <>
          <p>Ada {numPizzas} menu pizza autentik Italia yang tersedia</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          Kita masih berusaha membuat menu pizza kami, silahkan kembali lagi
          nanti XD
        </p>
      )}

      {/* <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={6}
        photoName="pizzas/focaccia.jpg"
        soldOut={false}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price={10}
        photoName="pizzas/margherita.jpg"
        soldOut={false}
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={12}
        photoName="pizzas/spinaci.jpg"
        soldOut={false}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : `${pizzaObj.price}$`}</span>
      </div>
    </li>
  );
}

function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hour = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const openHour = 0;
  const closeHour = 23;
  const isOpen =
    hour >= openHour &&
    (hour < closeHour || (hour === closeHour && minutes === 0));
  // console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed!");

  // if (!isOpen) return ( <p> Our Store is open from {openHour}:00 to {closeHour}:00.</p>);

  return (
    <footer className="footer">
      <p>
        {isOpen ? (
          <TokoBuka closeHour={closeHour} currentTime={currentTime} />
        ) : (
          <div className="order">
            <p>{currentTime.toLocaleTimeString()}, THE STORE IS CLOSED!</p>
            <p>
              Our Store is open from {openHour}:00 to {closeHour}:00.
            </p>
          </div>
        )}
      </p>
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function TokoBuka({ closeHour, currentTime }) {
  return (
    <div className="order">
      <span>{currentTime.toLocaleTimeString()}, THE STORE IS OPEN!</span>
      <button className="btn">Order</button>
      <p>We're currently open until {closeHour}:00.</p>
    </div>
  );
}

export default App;
