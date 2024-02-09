import { Book } from "@/@types/book.types";
import BookSidebarRecommendations from "@/components/BookSidebarRecommendation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import useRetrieveBook from "@/hooks/retrieve-books.hook";
import CartIcon from "@/icons/cart";
import TrashIcon from "@/icons/trash";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const { bookData, setBookSteps, isFetchEnd } = useRetrieveBook();
  const [cart, setCart] = useState<Book[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const retrieveBooks = async () => {
    setTimeout(() => {
      setBookSteps();
    }, 1500);
  };

  const handleSearch = async () => {
    if (searchQuery) {
      const url = `book/list?step=20&search=${searchQuery}`;
      setBookSteps(url);
    }
  };

  return (
    <>
      <Navbar cart={cart} cartCount={cart.length} />
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col px-8 py-8">
          <span className="text-3xl font-semibold leading-4 tracking-wide text-center">
            Books at 0x100043
          </span>
          <div className="hidden flex-row py-16 min-[1024px]:flex">
            <BookSidebarRecommendations />
            <div className="flex flex-col w-[80%]">
              <div className="px-8">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/books/events/bhm23/XCM_Manual_1537186_2878242_5322680_1500x150_2X_en_US.jpg" />
                <img
                  className="mt-3"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/kindle-content-smeghn/2024/Printdeals_february/KBHP_1500x300_VDay.jpg"
                />
                <img
                  className="mt-3"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/books/editorial/BHP/CHP/BHPdesk1500.jpg"
                />
              </div>
              <div className="px-8 py-16">
                <div className="flex flex-row justify-between items-center">
                  <span className="font-bold">Best Sellers</span>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      onChange={val => setSearchQuery(val.target.value)}
                      className="border-2 rounded-2xl mr-4 px-4"
                      placeholder="Search title, writer..."
                    />
                    <button
                      onClick={() => handleSearch()}
                      className="py-2 text-center px-6 bg-[#131921] rounded-3xl text-white"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                {bookData && bookData.length > 0 ? (
                  <InfiniteScroll
                    dataLength={bookData.length}
                    next={retrieveBooks}
                    hasMore={!isFetchEnd ? true : false}
                    endMessage={
                      <>
                        <span>Showing {bookData.length} Books.</span>
                      </>
                    }
                    loader={
                      <h4>{searchQuery ? "" : "Retrieving more Books..."}</h4>
                    }
                  >
                    <div className="py-8 grid grid-cols-4 gap-4">
                      {bookData.map(book => {
                        return (
                          <div
                            key={book.id}
                            className={`h-[300px] w-[200px] rounded-2xl border-2 flex flex-col items-center px-6 py-6`}
                          >
                            <img
                              className="rounded-xl w-[100px] h-[130px]"
                              src={book.coverImage}
                            />
                            <div className="flex flex-col justify-center mt-2 items-center">
                              <p className="text-sm text-justify font-semibold">
                                {book.title}
                              </p>
                              <span className="text-xs">By {book.writer}</span>
                              <span className="text-sm text-green-400">
                                ${book.price}
                              </span>
                            </div>
                            <div className="flex flex-row mt-8">
                              <button
                                onClick={() => setCart([...cart, book])}
                                className="px-4"
                              >
                                <CartIcon
                                  color={
                                    cart.filter(c => c.id === book.id)[0]?.id
                                      ? "#6A994E"
                                      : "#00000"
                                  }
                                  width="24px"
                                  height="24px"
                                />
                              </button>
                              <button
                                onClick={() => {
                                  const filtered = cart.filter(
                                    cartx => cartx.id !== book.id
                                  );
                                  setCart(filtered);
                                }}
                                className="px-4"
                              >
                                <TrashIcon
                                  color={
                                    cart.filter(c => c.id === book.id)[0]?.id
                                      ? "#6A994E"
                                      : "#00000"
                                  }
                                  width="24px"
                                  height="24px"
                                />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </InfiniteScroll>
                ) : (
                  <span>Failed to load books.</span>
                )}
              </div>
            </div>
          </div>
          {/** MOBILE */}
          <div className="flex flex-row py-16 min-[1024px]:hidden">
            <div className="px-2 py-16">
              <span className="font-bold">Best Sellers</span>
              {bookData && bookData.length > 0 ? (
                <InfiniteScroll
                  dataLength={bookData.length}
                  next={retrieveBooks}
                  hasMore={!isFetchEnd ? true : false}
                  endMessage={
                    <>
                      <span>Showing {bookData.length} Books.</span>
                    </>
                  }
                  loader={<h4>Retrieving more Books...</h4>}
                >
                  <div className="py-8 grid grid-cols-2 gap-2">
                    {bookData.map(book => {
                      return (
                        <div
                          key={book.id}
                          className={`p-4 rounded-2xl border-2 flex flex-col items-center px-6 py-6`}
                        >
                          <img
                            className="rounded-xl w-[100px] h-[130px]"
                            src={book.coverImage}
                          />
                          <div className="flex flex-col justify-center mt-2 items-center">
                            <p className="text-sm text-justify font-semibold">
                              {book.title}
                            </p>
                            <span className="text-xs">By {book.writer}</span>
                            <span className="text-sm text-green-400">
                              ${book.price}
                            </span>
                          </div>
                          <div className="flex flex-row mt-8">
                            <button
                              onClick={() => setCart([...cart, book])}
                              className="px-4"
                            >
                              <CartIcon
                                color={
                                  cart.filter(c => c.id === book.id)[0]?.id
                                    ? "#6A994E"
                                    : "#00000"
                                }
                                width="24px"
                                height="24px"
                              />
                            </button>
                            <button
                              onClick={() => {
                                const filtered = cart.filter(
                                  cartx => cartx.id !== book.id
                                );
                                setCart(filtered);
                              }}
                              className="px-4"
                            >
                              <TrashIcon
                                color={
                                  cart.filter(c => c.id === book.id)[0]?.id
                                    ? "#6A994E"
                                    : "#00000"
                                }
                                width="24px"
                                height="24px"
                              />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </InfiniteScroll>
              ) : (
                <span>Failed to load books.</span>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
