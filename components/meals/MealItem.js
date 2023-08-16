import { useDispatch } from "react-redux";
import { useRef } from "react";

import { cartActions } from "@/store/Cart-slice";

function MealItem(props) {
  const dispatch = useDispatch();
  const inputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();

    const enteredAmount = inputRef.current.value;

    dispatch(
      cartActions.addItemToCard({
        id: props.id,
        name: props.name,
        price: props.price,
        quantity: +enteredAmount,
      })
    );
  }

  return (
    <li className="flex text-center py-4 px-8 justify-around border-2 max-w-3xl shadow-md rounded-xl mx-auto mb-4">
      <div className="flex flex-col gap-4">
        <h3 className="text-black font-bold text-2xl">{props.name}</h3>
        <p className="font-serif italic">{props.description}</p>
        <h1 className="text-3xl text-[#ad5502] font-bold">{props.price}</h1>
      </div>

      <form onSubmit={onSubmit} className=" my-auto ">
        <label className="font-bold mr-4">Amount</label>
        <input
          className="border rounded-md w-14 mb-2"
          ref={inputRef}
          max={5}
          min={1}
          defaultValue={1}
          type="number"
        />
        <button className="block bg-[#8a2b06] text-white cursor-pointer border border-solid border-[#8a2b06] py-1 px-8 font-bold rounded-[20px] hover:bg-[#641e03]">
          +Add
        </button>
      </form>
    </li>
  );
}

export default MealItem;
