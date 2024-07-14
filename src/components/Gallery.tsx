import { type Dessert } from "../types";
import DisplayItem from "./DisplayItem";

const Gallery = ({
    items,
    handleAddToCart,
}: {
    items: Dessert[];
    handleAddToCart: (name: string) => void;
}) => (
    <div className="gallery-container">
        {items.map((item) => {
            return (
                <DisplayItem
                    key={item.name}
                    item={item}
                    handleAddToCart={handleAddToCart}
                ></DisplayItem>
            );
        })}
    </div>
);

export default Gallery;
