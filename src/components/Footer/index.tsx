const Footer = () => {
  return (
    <div className="mt-[1.688rem] flex w-full flex-col border-y-[1.5px] px-4 py-9 min-[1024px]:px-14">
      <div className="flex flex-col min-[1024px]:flex-row min-[1024px]:justify-between">
        <div className="flex flex-col">
          <img
            src="./assets/logos/main-logo.png"
            className="h-[120px] w-[120px]"
          />
          <span className="mt-7 text-[0.95rem] font-extralight min-[1024px]:w-[370px]">
            The 0x100043.com Books homepage helps you explore Earth's Biggest
            Bookstore without ever leaving the comfort of your couch. Here
            you'll find current best sellers in books, new releases in books,
            deals in books, Kindle eBooks, Audible audiobooks, and so much more.
            We have popular genres like Literature & Fiction, Children's Books,
            Mystery & Thrillers, Cooking, Comics & Graphic Novels, Romance,
            Science Fiction & Fantasy, and 0x100043 programs such as Best Books of
            the Month, the 0x100043 Book Review, and 0x100043 Charts to help you
            discover your next great read. In addition, you'll find great book
            recommendations that may be of interest to you based on your search
            and purchase history, as well as the most wished for and most gifted
            books. We hope you enjoy the 0x100043.com Books homepage!
          </span>
          <span className="pt-5 text-[0.95rem] font-extralight">
            0x100043 No: XXXXXXXXX
          </span>
        </div>
        <div className="flex flex-col pt-[1.25rem] min-[1024px]:ml-[8rem] min-[1024px]:flex-row">
          <div className="mt-[2rem] flex flex-col min-[400px]:pr-[5.25rem]">
            <span className="text-md font-bold">0x100043</span>
            <a
              target="_blank"
              href="#"
              className="mt-[1.125rem] whitespace-nowrap text-[0.95rem] font-extralight"
            >
              About Us
            </a>
            <a
              target="_blank"
              href="#"
              className="mt-[1.125rem] whitespace-nowrap text-[0.95rem] font-extralight"
            >
              Partner Networks
            </a>
            <a
              target="_blank"
              href="#"
              className="mt-[1.125rem] whitespace-nowrap text-[0.95rem] font-extralight"
            >
              Contact
            </a>
            <a
              target="_blank"
              href="#"
              className="mt-[1.125rem] whitespace-nowrap text-[0.95rem] font-extralight"
            >
              Media Enquiries
            </a>
          </div>
          <div className="mt-[2rem] flex flex-col min-[400px]:pr-[5.25rem]">
            <span className="text-md font-bold">Services</span>
            <a
              target="_blank"
              href="#"
              className="mt-[1.125rem] whitespace-nowrap text-[0.95rem] font-extralight"
            >
              0x100044
            </a>
            <a
              target="_blank"
              href="#"
              className="mt-[1.125rem] whitespace-nowrap text-[0.95rem] font-extralight"
            >
              0x100043
            </a>
            <a
              target="_blank"
              href="#"
              className="mt-[1.125rem] whitespace-nowrap text-[0.95rem] font-extralight"
            >
              0x100045
            </a>
          </div>
          <div className="mt-[2rem] flex flex-col">
            <span className="text-md font-bold">Resources</span>
            <a
              target="_blank"
              href="#"
              className="mt-[1.125rem] whitespace-nowrap text-[0.95rem] font-extralight"
            >
              Insights
            </a>
            <a
              target="_blank"
              href="#"
              className="mt-[1.125rem] whitespace-nowrap text-[0.95rem] font-extralight"
            >
              Newsroom
            </a>
            <a
              target="_blank"
              href="#"
              className="mt-[1.125rem] whitespace-nowrap text-[0.95rem] font-extralight"
            >
              Privacy Policy
            </a>
            <a
              target="_blank"
              href="#"
              className="mt-[1.125rem] whitespace-nowrap text-[0.95rem] font-extralight"
            >
              Term of Use
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
