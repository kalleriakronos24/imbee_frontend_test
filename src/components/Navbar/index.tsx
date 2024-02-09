import CartIcon from "@/icons/cart";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  cartCount: number;
  cart: Book[];
};
const Navbar = ({ cartCount = 0, cart }: Props) => {
  const navigate = useNavigate();

  const isLoggedIn = window.localStorage.getItem("token");

  return (
    <nav className="bg-[#131921] py-4">
      <div className="px-8">
        <div className="flex flex-row justify-between">
          <button onClick={() => navigate("/")}>
            <img src="./assets/logos/main-logo.png" className="w-8 h-8" />
          </button>
          <div className="flex flex-row items-center">
            <button onClick={() => navigate("/login")} className="p-2 mx-6">
              <span className="text-white font-bold">
                {isLoggedIn ? "Hello there." : "Sign In"}
              </span>
            </button>
            <button
              onClick={() =>
                navigate("/checkout", {
                  state: {
                    cart,
                  },
                })
              }
              className="flex flex-row"
            >
              <CartIcon color="#FFFFFF" />
              <span className="text-white pl-2">{cartCount}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
