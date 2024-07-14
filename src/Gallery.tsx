import { type Dessert } from "./types";

const Gallery = ({
    items,
    handleAddToCart,
    logBasketState,
}: {
    items: Dessert[];
    handleAddToCart: (name: string) => void;
    logBasketState: () => void;
}) => (
    <div>
        {items.map((item) => {
            return (
                <div>
                    {item.name} costs {item.price}{" "}
                    <button onClick={() => handleAddToCart(item.name)}>
                        Add To Cart
                    </button>
                </div>
            );
        })}
        <button onClick={() => logBasketState()}>Log State!</button>;
    </div>
);

export default Gallery;
