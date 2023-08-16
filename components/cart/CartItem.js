import { useDispatch } from "react-redux";

import { cartActions } from "@/store/Cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  return (
    <li className="flex justify-between items-center border-[2px] border-solid border-[#8a2b06] py-4 px-4 my-4 mx-0 font-serif rounded-md">
      <div>
        <h2 className="mb-2 text-[#363636] font-bold text-2xl">{props.name}</h2>
        <div className="w-40 flex justify-between items-center">
          <span className="font-bold text-[#8a2b06]">
            {props.price.toFixed(2)}
          </span>
          <span className="font-bold border border-solid border-[#ccc] py-1 px-3 rounded-md text-[#363636]">
            x {props.quantity}
          </span>
        </div>
      </div>
      <div className="flex">
        <button
          onClick={() => dispatch(cartActions.removeItemFromCart(props.id))}
          className="font-bold text-xl text-[#8a2b06] border border-solid border-[#8a2b06] w-12 my-auto flex justify-center rounded-md hover:bg-[#8a2b06] hover:text-white"
        >
          −
        </button>
        <button
          onClick={() =>
            dispatch(cartActions.addItemToCard({ ...props, quantity: 1 }))
          }
          className="font-bold text-xl text-[#8a2b06] border border-solid border-[#8a2b06] w-12 m-1 rounded-md flex justify-center hover:bg-[#8a2b06] hover:text-white"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
