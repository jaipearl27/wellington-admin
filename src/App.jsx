import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "sonner";

///// pages /////

import Login from "./pages/Auth/Login/Login";

import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import store from "./features/store";

import Users from "./pages/users/user";
import { injectStore } from "./services/axiosInterceptor";

const isUserLoggedIn = localStorage.getItem("isWelluserlogin");

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: isUserLoggedIn ? <Layout /> : <Navigate to="/login" />,

      children: [
        {
          path: "/",
          element: <Users />,

        },
   {
          path: "/users",
          element: <Users />,
          
        },
        {
          path: "/*",
          element: <NotFound />,
        },

  
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
,
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  injectStore(store)
  return (
    <>
        <Toaster richColors containerClassName="overflow-auto" />
        <RouterProvider router={router} />
 
    </>
  );
};

export default App;
