import Header from "@/components/Layout/Header";
import Modal from "@/components/UI/Modal";
import Cart from "@/components/cart/Cart";
import Meals from "@/components/meals/Meals";
import { useSelector } from "react-redux";

export default function Home() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <>
      <Header />
      <Meals />
      {showCart && (
        <Modal>
          <Cart />
        </Modal>
      )}
    </>
  );
}
