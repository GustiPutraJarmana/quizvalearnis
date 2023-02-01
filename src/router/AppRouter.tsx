import React, { FC, ReactElement } from "react";
import {
  LoginQuizPage,
  RegisterQuizPage,
  HomeQuizPage,
  QuizPage,
  ResultQuizPage,
  ErrorPage,
} from "../routes";
import { Routes, Route } from "react-router-dom";

const AppRouter: FC = (): ReactElement => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<HomeQuizPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/login"
          element={<LoginQuizPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/register"
          element={<RegisterQuizPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/quiz"
          element={<QuizPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/result"
          element={<ResultQuizPage />}
          errorElement={<ErrorPage />}
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
