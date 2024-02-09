import { AxiosSuccessResponse } from "../../@types/axios.types";
import { Book } from "../../@types/book.types";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import TrashIcon from "../../icons/trash";
import axios, { AxiosError, isAxiosError } from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type StateProps = {
  cart: Book[];
};

const CheckoutPage = () => {
  const { state } = useLocation();

  const stateData = state as StateProps;
  let data = stateData.cart || [];

  const [cartData, setCartData] = useState<Book[]>(data);
  const navigate = useNavigate();

  const proceedCheckout = async () => {
    try {
      const isLoggedIn = window.localStorage.getItem("token");

      if (!isLoggedIn) {
        window.alert("You must login first before continue to checkout");
        return;
      }
      const payload = {
        data: cartData,
      };
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/order/checkout`,
        {
          ...payload,
        },
        {
          headers: {
            Authorization: "Bearer " + isLoggedIn,
          },
        }
      );

      const response = result.data as AxiosSuccessResponse<StateProps>;
      if (response.status === "success") {
        window.alert("Success checkout");
        navigate("/");
        return;
      }
    } catch (error) {
      const isAxiosErr = isAxiosError(error);
      if (isAxiosErr) {
        const err = error as AxiosError;
        window.alert(
          `failed to checkout. reason ${JSON.stringify(err?.response?.data)}`
        );
        return;
      }
    }
  };
  return (
    <>
      <Navbar cart={cartData} cartCount={cartData.length} />
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col px-8 py-8">
          <span className="text-3xl font-semibold leading-4 tracking-wide text-center">
            Your Cart Summary
          </span>
          <div className="px-12 mt-10 flex flex-col justify-center min-[1024px]:mt-24 min-[1024px]:px-40">
            <span className="font-bold text-md">Your Items</span>
            <hr className="mt-2 border-[1.2px]" />
            <div className="mt-6 flex flex-col">
              {cartData.length > 0 &&
                cartData.map((cart, idx) => {
                  return (
                    <>
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-row justify-center items-center">
                          <span>{idx + 1}.</span>
                          <img
                            src={cart.coverImage}
                            width={40}
                            height={40}
                            className="ml-2"
                          />
                          <div className="ml-2 flex flex-col">
                            <span>
                              {cart.title} By {cart.writer}
                            </span>
                            <span className="text-sm text-green-400 min-[1024px]:hidden">
                              ${cart.price}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex flex-row">
                            <span className="hidden text-sm text-green-400 min-[1024px]:flex">
                              ${cart.price}
                            </span>
                            <button
                              onClick={() => {
                                const filtered = cartData.filter(
                                  cartx => cartx.id !== cart.id
                                );
                                setCartData(filtered);
                              }}
                              className="px-4"
                            >
                              <TrashIcon
                                color="#00000"
                                width="14px"
                                height="14px"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr className="border-b-[1.2px] mt-2" />
                    </>
                  );
                })}
            </div>
            <div className="mt-6 flex flex-col">
              <span className="font-bold text-md">
                Subtotal: $
                {cartData.reduce((a, b) => a + b.price, 0).toFixed(2)}{" "}
              </span>
              <span className="font-bold text-md">
                Grandtotal: $
                {cartData.reduce((a, b) => a + b.price, 0).toFixed(2)}
              </span>
              <span className="font-bold text-md">Payment: Yes</span>
            </div>
            <div className="mt-10 flex flex-col justify-center items-center">
              <button
                onClick={proceedCheckout}
                className="py-2 px-6 bg-[#131921] rounded-3xl text-white"
              >
                Proceed Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
