import React, { FC, ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { RootState, resetState } from "../../store";
import AuthPage from "./AuthPage";

const ResultQuizPage: FC = (): ReactElement => {
  const result = useSelector((state: RootState) => state.resultQuiz)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const logout = () => {
    dispatch(resetState())
    localStorage.removeItem("id");
    navigate("/login", { replace: true });
  };
  return (
    <AuthPage>
      <div className="relative flex flex-col overflow-hidden">
        <div className="flex items-center justify-center h-screen flex-col z-30 text-black bg-slate-300 bg-opacity-70">
          <div className="flex p-4 md:p-10 text-3xl md:text-5xl text-center items-center justify-center">
            Your score: {result?.result}
          </div>
          <div className="flex p-4 md:p-10 text-3xl md:text-5xl text-center items-center justify-center">
            Out of {result.totalQuestion}
          </div>
          <div className="flex flex-row justify-between">
            <div className="m-4">
              <Link to="/" replace>
                <button
                onClick={() =>  dispatch(resetState())}
                 className="px-9 md:px-[120px] py-2 md:py-3 text-xl md:text-3xl bg-red-300 text-white hover:bg-red-400 hover:text-red-200 hover:shadow-lg rounded-3xl">
                  HOME
                </button>
              </Link>
            </div>
            <div className="m-4">
              <Link to="/" replace>
                <button
                  onClick={() => logout()}
                  className="px-9 md:px-[120px] py-2 md:py-3 text-xl md:text-3xl bg-red-500 text-white hover:bg-red-700 hover:text-red-500 hover:shadow-lg rounded-3xl">
                  LOGOUT
                </button>
              </Link>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.valearnis.com/vw/img/HASS-page-web-01.webp"
          alt="valearnis"
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none bg-opacity-25"
        />
      </div>
    </AuthPage>
  );
};

export default ResultQuizPage;
