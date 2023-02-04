import React, { FC, ReactElement, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

interface IStateLogin {
  email?: string;
  password?: string;
}

const LoginQuizPage: FC = (): ReactElement => {
  const navigate = useNavigate();
  const [stateLogin, setStateLogin] = useState<IStateLogin>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChange = (e: string, name: string) => {
    setStateLogin({ ...stateLogin, [name]: e });
  };

  const generateRandomHashToken = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let hash = "";
    for (let i = 0; i < 20; i++) {
      hash += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return hash;
  }
  

  const login = async () => {
    try {
      if (stateLogin?.email === "" || stateLogin?.password === "") {
        throw new Error("Email or Password is required")
      } else {
        await localStorage.setItem("id", `Bearer : ${generateRandomHashToken()}`);
        const checkExistToken = await localStorage.getItem("id");
        if (checkExistToken) {
          navigate("/");
        } 
      }
    } catch (error) {
      setErrorMessage('Email or Password is required');
    }
  };

  return (
    <div className="relative flex flex-col overflow-hidden">
      <div className="flex items-center justify-center h-screen flex-col z-30 text-black bg-slate-300 bg-opacity-50">
        <form className="bg-cyan-300 bg-opacity-70 shadow-md sm:w-[350px] sm:h-[400px] px-10 pt-8 pb-10 mb-4 rounded-xl">
          <div className="flex items-center justify-center mb-7 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900">
            Valearniz Quiz
          </div>
          {errorMessage !== '' && (
            <div className="bg-red-400 items-center my-4">
              <div className="flex justify-center">
              {errorMessage}</div>

              </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded focus:border-blue-900 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="sample@mail.com"
              onChange={(e) => onChange(e.target.value, "email")}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border focus:border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*************"
              onChange={(e) => onChange(e.target.value, "password")}
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
              className="bg-blue-600 text-white hover:bg-blue-400 hover:text-blue-700 font-bold py-2 px-4 rounded-md"
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
