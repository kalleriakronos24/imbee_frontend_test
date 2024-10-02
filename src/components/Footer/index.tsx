const Footer = () => {
  return (
    <div className="mt-[1.688rem] flex w-full flex-col border-y-[1.5px] px-4 py-9 min-[1024px]:px-14">
      <div className="flex flex-col min-[1024px]:flex-row min-[1024px]:justify-between">
        <div className="flex flex-col">
          <span className="mt-7 text-[0.95rem] font-extralight min-[1024px]:w-[370px]">
            The Imbee.com is a network of question-and-answer websites covering various topics, where users can ask and answer questions. It's best known for Stack Overflow, focused on programming. Users earn reputation points and badges for their contributions, fostering a community-driven knowledge base
          </span>
          <span className="pt-5 text-[0.95rem] font-extralight">
            Imbee No: XXXXXXXXX
          </span>
        </div>
        <div className="flex flex-col pt-[1.25rem] min-[1024px]:ml-[8rem] min-[1024px]:flex-row">
          <div className="mt-[2rem] flex flex-col min-[400px]:pr-[5.25rem]">
            <span className="text-md font-bold">Imbee Exchange</span>
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
              Imbee FE v1
            </a>
            <a
              target="_blank"
              href="#"
              className="mt-[1.125rem] whitespace-nowrap text-[0.95rem] font-extralight"
            >
              Imbee FE v2
            </a>
            <a
              target="_blank"
              href="#"
              className="mt-[1.125rem] whitespace-nowrap text-[0.95rem] font-extralight"
            >
              Imbee FE v3
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
