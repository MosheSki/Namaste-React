import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cartItems.length == 0 && <h2>Add Some Items To Cart</h2>}
      {cartItems.length !== 0 && (
        <button
          className="border border-red-500 bg-red-500 text-white m-2 p-2 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
