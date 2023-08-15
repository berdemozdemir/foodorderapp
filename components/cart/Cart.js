import { useDispatch, useSelector } from "react-redux";

import CartItem from "./CartItem";
import { uiActions } from "@/store/ui-slice";

// const DUMMY_ITEMS = [
//   { id: "meal_1", name: "Beyti", price: 15.55, amount: 3 },
//   { id: "meal_2", name: "Adana", price: 17.55, amount: 2 },
//   { id: "meal_3", name: "Iskender", price: 22.55, amount: 4 },
// ];

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <>
      <ul className="p-0 max-h-96 overflow-scroll m-4 overflow-x-hidden overflow-y-auto">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
      </ul>

      <div className="flex justify-between items-center font-bold text-2xl m-4 font-serif border-t-2 border-[#8a2b06] pt-4">
        <span>Total Amount</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className="text-right m-4">
        <button
          onClick={() => dispatch(uiActions.toggle(false))}
          className="cursor-pointer bg-transparent border border-solid border-[#8a2b06] py-2 px-8 rounded-[25px] hover:bg-[#5a1a01] hover:text-white"
        >
          Close
        </button>
        <button className="cursor-pointer bg-transparent border border-solid border-[#8a2b06] bg-[#8a2b06] py-2 px-8 rounded-[25px] ml-4 hover:bg-[#5a1a01] hover:text-white">
          Order
        </button>
      </div>
    </>
  );
}

export default Cart;
