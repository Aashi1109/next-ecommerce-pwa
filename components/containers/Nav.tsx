import Image from "next/image";
import Link from "next/link";
import SearchBar from "../reviews/SearchBar";
import CartIcon from "../CartIcon";

const Nav = () => {
  return (
    <header className="flex-between bg-black text-white py-3 flex-col sm:flex-row rounded-b-xl px-2  gap-4">
      <Link href={"/"} className="flex-center">
        <Image
          className="object-contain rounded-full mr-8 bg-gray-100"
          alt="Next Ecommerce Logo"
          height={40}
          width={40}
          src={"/assets/images/logo2.png"}
        />

        <p className="text-xl font-light tracking-widest uppercase ">
          Next Ecommerce
        </p>
      </Link>

      <SearchBar />
      <CartIcon />
    </header>
  );
};

export default Nav;
