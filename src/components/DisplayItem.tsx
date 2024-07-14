import { type Dessert } from "../types";

type DisplayItemProps = {
    item: Dessert;
    handleAddToCart: (name: string) => void;
};

const DisplayItem = ({ item, handleAddToCart }: DisplayItemProps) => {
    return (
        <div className="item-container">
            <div
                className="thumbnail-container"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div className={"thumbnail"}>
                    <img
                        style={{ height: "100%", width: "100%" }}
                        src={item.image.desktop}
                    />
                </div>
                <button
                    onClick={() => handleAddToCart(item.name)}
                    style={{
                        width: "90px",
                        position: "relative",
                        bottom: "15px",
                    }}
                >
                    Add To Cart
                </button>
            </div>
            <div>{item.name}</div>
            <div>{item.price}</div>
        </div>
    );
};

export default DisplayItem;
