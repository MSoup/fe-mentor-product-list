// import { useState } from 'react'

import { useState } from "react";
import "./App.css";
import Gallery from "./Gallery";
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
        <>
            <h1>Desserts</h1>
            <Gallery
                items={desserts}
                handleAddToCart={handleAddToCart}
                logBasketState={logBasketState}
            ></Gallery>
        </>
    );
}

export default App;
