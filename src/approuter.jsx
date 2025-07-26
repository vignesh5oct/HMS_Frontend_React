import React, { createContext, useState } from "react";
import { BrowserRouter } from "react-router";
import AppContainer from "./appcontainer.jsx";

export const Appcontext = createContext();

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState("user");
  
  return (
    <Appcontext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppContainer />
      </BrowserRouter>
    </Appcontext.Provider>
  );
};

export default AppRouter;