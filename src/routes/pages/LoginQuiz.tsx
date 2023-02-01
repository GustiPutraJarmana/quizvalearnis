import React, { FC, ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginQuizPage: FC = (): ReactElement => {
  const navigate = useNavigate();
  const login = async () => {
    try {
      await localStorage.setItem("id", "Bare Token");
      const checkExistToken = await localStorage.getItem("id");
      if (checkExistToken) {
        navigate("/", { replace: true });
      } else {
        throw new Error("Something Wrong!!!");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="relative flex flex-col overflow-hidden">
      <div className="flex items-center justify-center h-screen flex-col z-30 text-black bg-slate-300 bg-opacity-50">
        <form className="bg-blue-400 bg-opacity-50 shadow-md rounded sm:w-[350px] sm:h-[400px] px-10 pt-8 pb-10 mb-4">
          <div className="flex items-center justify-center mb-5 text-xl font-bold">
            Valearniz Quiz
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded focus:border-blue-900 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password">
              Email
            </label>
            <input
              className="shadow appearance-none border focus:border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex justify-between">
            <Link to="/register">
              <p className="text-blue-500 cursor-pointer hover:text-blue-800">
                Register
              </p>
            </Link>
            <button
              onClick={() => {
                login();
              }}
              key="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button">
              Sign In
            </button>
          </div>
        </form>
      </div>
      <img
        src="https://www.learninghouse.ca/media/social_images/homepage.jpg"
        alt="valearnis"
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none bg-opacity-25"
      />
    </div>
  );
};

export default LoginQuizPage;