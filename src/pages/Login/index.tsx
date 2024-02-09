import Footer from "@/components/Footer";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const proceedLogin = async () => {
    try {
      const payload = {
        username: username,
        password: password,
      };

      if (!payload.username || !payload.password) {
        window.alert("Username or Password cannot be empty");
        return;
      }
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/sign-in`,
        {
          ...payload,
        }
      );

      const response = result.data?.response?.token;

      if (response) {
        window.localStorage.setItem("token", response);
        window.alert("login success");
      }
    } catch (error) {
      window.alert(`failed to login. reason ${JSON.stringify(error)}`);
      return;
    }
  };
  return (
    <>
      <div className="flex flex-col h-full w-full">
        <div className="flex flex-col px-8 py-6 items-center">
          <button onClick={() => navigate("/")}>
            <img src="./assets/logos/main-logo.png" width={90} height={90} />
          </button>
          <div className="mt-8 p-6 border-2 rounded-xl w-full min-[1024px]:w-[400px] h-[450px]">
            <span className="text-lg font-bold">Sign In</span>
            <hr className="mt-2 border-b-1" />

            <div className="mt-8">
              <div className="flex flex-col">
                <label className="text-sm text-gray-500 font-bold">
                  Username
                </label>
                <input
                  type="text"
                  onChange={val => setUsername(val.target.value)}
                  className="mt-2 border-2 rounded-lg p-2"
                  placeholder="sampleuser1"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-sm text-gray-500 font-bold">
                  Password
                </label>
                <input
                  type="password"
                  onChange={val => setPassword(val.target.value)}
                  className="mt-2 border-2 rounded-lg p-2"
                  placeholder="*************"
                />
              </div>
            </div>

            <div className="flex flex-col mt-6 items-center">
              <button
                onClick={() => proceedLogin()}
                className="py-2 px-6 bg-[#131921] rounded-3xl text-white"
              >
                Login now
              </button>
              <span className="my-2">or</span>
              <button
                onClick={() => navigate("/register")}
                className="py-2 px-6 bg-[#131921] rounded-3xl text-white"
              >
                Create a new Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
