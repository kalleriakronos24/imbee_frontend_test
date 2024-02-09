import axios from "axios";
import { useEffect, useState } from "react";

const useRetrieveBook = () => {
  const [bookData, setBookData] = useState<Book[]>();
  const [steps, setSteps] = useState<number>(20);
  const [isFetchEnd, setIsFetchEnd] = useState(false);

  async function setBookSteps(url?: string) {
    const step = steps + 20;
    try {
      let urlPath = `book/list?=step${step}`;
      if (url) {
        urlPath = url;
        setIsFetchEnd(true);
      }
      const data = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/${urlPath}`
      );
      const response = data.data as AxiosSuccessResponse<BookResponse>;
      if (response) {
        const data = response.response.data;
        if (data.length > 0) {
          setBookData(data);
          setSteps(step);
        }

        if (response.response.meta.isExceed) {
          setIsFetchEnd(true);
        }
      }
    } catch (error) {
      window.alert(`Error when retrieve books ${JSON.stringify(error)}`);
    }
  }

  async function getBooks() {
    try {
      const data = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/book/list?step=${steps}`
      );
      const response = data.data as AxiosSuccessResponse<BookResponse>;
      if (response) {
        const data = response.response.data;
        if (data.length > 0) {
          setBookData(data);
        }
      }
    } catch (error) {
      window.alert(`Error when retrieve books ${JSON.stringify(error)}`);
      return;
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return {
    bookData,
    setBookSteps,
    isFetchEnd,
  };
};

export default useRetrieveBook;
