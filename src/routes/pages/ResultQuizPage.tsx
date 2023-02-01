import React, { FC, ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthPage from "./AuthPage";

const ResultQuizPage: FC = (): ReactElement => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("id");
    navigate("/login", { replace: true });
  };
  return (
    <AuthPage>
      <div className="relative flex flex-col overflow-hidden">
        <div className="flex items-center justify-center h-screen flex-col z-30 text-black bg-slate-300 bg-opacity-70">
          <div className="flex p-10 text-2xl md:text-5xl text-center items-center justify-center">
            Your score: 100
          </div>
          <div className="flex p-10 text-2xl md:text-5xl text-center items-center justify-center">
            Out of 100
          </div>
          <div className="flex flex-row justify-between">
            <div className="m-4">
              <Link to="/">
                <button className="px-10 sm:px-[150px] py-2 sm:py-3 text-xl md:text-3xl bg-red-300 text-white hover:bg-red-400 hover:text-red-200 hover:shadow-lg">
                  HOME
                </button>
              </Link>
            </div>
            <div className="m-4">
              <Link to="/">
                <button
                  onClick={() => logout()}
                  className="px-10 sm:px-[150px] py-2 sm:py-3 text-xl md:text-3xl bg-red-700 text-white hover:bg-red-white hover:bg-white hover:text-red-700 hover:shadow-lg">
                  LOGOUT
                </button>
              </Link>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.valearnis.com/vw/img/og-image.png"
          alt="valearnis"
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none bg-opacity-25"
        />
      </div>
    </AuthPage>
  );
};

export default ResultQuizPage;
