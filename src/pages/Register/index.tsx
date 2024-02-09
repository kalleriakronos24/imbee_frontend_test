import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col h-full w-full">
        <div className="flex flex-col px-8 py-6 items-center">
          <button onClick={() => navigate('/')}>
            <img src="./assets/logos/main-logo.png" width={90} height={90} />
          </button>
          <div className="mt-8 p-6 border-2 rounded-xl w-full min-[1024px]:w-[400px] h-[450px]">
            <span className="text-lg font-bold">Sign Up</span>
            <hr className="mt-2 border-b-1" />
            <div className="mt-8">
              <div className="flex flex-col">
                <label className="text-sm text-gray-500 font-bold">
                  Username
                </label>
                <input
                  type="text"
                  className="mt-2 border-2 rounded-lg p-2"
                  placeholder="sampleuser1"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-sm text-gray-500 font-bold">
                  Password
                </label>
                <input
                  type="text"
                  className="mt-2 border-2 rounded-lg p-2"
                  placeholder="*************"
                />
              </div>
            </div>

            <div className="flex flex-col mt-6 items-center">
              <button className="py-2 px-6 bg-[#131921] rounded-3xl text-white">
                Register now
              </button>
              <span className="my-2">or</span>
              <button
                onClick={() => navigate("/login")}
                className="py-2 px-6 bg-[#131921] rounded-3xl text-white"
              >
                Sign In with credentials
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
