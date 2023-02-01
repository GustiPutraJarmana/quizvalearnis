import React, { FC, ReactElement } from "react";

const ErrorPage: FC = (): ReactElement => {
  return (
    <div className="flex items-center justify-center h-screen flex-col z-30 text-black bg-slate-300 bg-opacity-50">
      <div className="text-4xl">Oops!</div>
      <div className="text-xl">Sorry, an unexpected error has occurred.</div>
      <div className="text-xl">Page Not Found!!!</div>
    </div>
  );
};

export default ErrorPage;
