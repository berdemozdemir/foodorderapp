import CartButton from "./HeaderCartButton";

function Header() {
  return (
    <>
      <header className="h-20 px-[15%] bg-orange-800 text-white text-3xl font-serif flex justify-between fixed left-0 top-0 w-full z-10">
        <h1 className="font-bold my-auto  text-[1.5rem]">NextJS Sepeti</h1>
        <CartButton />
      </header>

      <div className=" w-full h-[25rem] overflow-hidden">
        <img
          alt="meals"
          src="/images/meals.jpg"
          className="w-[110%] h-full object-cover "
          //transform rotate-5 -translate-y-16 -translate-x-4 img classname'ine bu kodlar eklenecekti ama bilmiyorum
        />
      </div>
    </>
  );
}

export default Header;
