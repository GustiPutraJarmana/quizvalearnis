import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import AuthPage from "./AuthPage";

const HomeQuizPage: FC = (): ReactElement => {
  return (
    <AuthPage>
      <div className="relative flex flex-col overflow-hidden">
        <div className="flex items-center justify-center h-screen flex-col z-30 bg-slate-300 bg-opacity-70">
          <div className="flex p-10 text-2xl md:text-5xl text-center items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900">
            WELCOME TO VALEARNIS QUIZ
          </div>
          <Link to="/quiz" reloadDocument>
            <button className="px-10 sm:px-[150px] py-2 sm:py-3 text-xl md:text-3xl bg-red-300 text-white hover:bg-red-400 hover:text-red-200 hover:shadow-lg rounded-3xl">
              GET STARTED
            </button>
          </Link>
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

export default HomeQuizPage;
