import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

const AuthPage = ({ children }: any) => {
  const checkToken = () => {
    const token = localStorage.getItem("id");
    return Boolean(token);
  };
  return (
    <React.Fragment>
      {checkToken() ? <div>{children}</div> : <Navigate to="/login" replace />}
    </React.Fragment>
  );
};

export default AuthPage;
