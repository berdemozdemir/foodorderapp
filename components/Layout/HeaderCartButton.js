import { useDispatch, useSelector } from "react-redux";

import CartIcon from "../cart/CartIcon";
import { uiActions } from "@/store/ui-slice";

function HeaderCartButton() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <button
      onClick={() => dispatch(uiActions.toggle(true))}
      className="flex justify-around h-14 items-center rounded-[25px] font-bold cursor-pointer gap-3  px-12 text-white bg-[#4d1601] text-sm my-auto border hover:bg-[#2c0d00]"
    >
      <span className="w-6 h-6 my-auto ">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="bg-[#b94517] py-1 px-4 rounded-[25px]">
        {totalQuantity}
      </span>
    </button>
  );
}

export default HeaderCartButton;
