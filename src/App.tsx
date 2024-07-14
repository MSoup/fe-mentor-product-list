// import { useState } from 'react'

import { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import desserts from "./data.json";

type Basket = {
    [item: string]: number;
};

function App() {
    const [basket, setBasket] = useState({} as Basket);

    const handleAddToCart = (name: string) => {
        if (basket[name] === undefined) {
            console.log(name, "doesnt exist, adding 1");
            setBasket((prevState) => ({
                ...prevState,
                [name]: 1,
            }));
        } else {
            console.log(name, "exists, adding another");
            const currentCount = basket[name];
            setBasket((oldBasket) => ({
                ...oldBasket,
                [name]: currentCount + 1,
            }));
        }
    };
    const logBasketState = () => console.log(basket);

    return (
        <div style={{ display: "flex" }}>
            <div className={"main-pane"}>
                <h1>Desserts</h1>

                <Gallery
                    items={desserts}
                    handleAddToCart={handleAddToCart}
                ></Gallery>
            </div>
            <div className="side-pane">
                <p>
                    Your Cart {Object.values(basket).reduce((a, b) => a + b, 0)}
                </p>
                <button onClick={() => logBasketState()}>Log State!</button>
            </div>
        </div>
    );
}

export default App;
