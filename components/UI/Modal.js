import { uiActions } from "@/store/ui-slice";
import { useDispatch } from "react-redux";

function Modal({ children }) {
  const dispatch = useDispatch();

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-20 ">
      <dialog open className="z-10 bg-white w-[700px] rounded-lg">
        {children}
      </dialog>
      <div
        onClick={() => dispatch(uiActions.toggle(false))}
        className="bg-black bg-opacity-50 w-full h-full z-[9]"
      ></div>
    </div>
  );
}

export default Modal;
