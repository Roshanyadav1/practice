import React from "react";
import Home from "./pages/home/Home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Login />
    ),
  },
  {
    path: "sign-up",
    element: (
      <SignUp />
    ),
  },
  {
    path: "home/*",
    element: (<Home />),
  },
]);


function App() {
  return (
    <Grid2>
      <RouterProvider router={router} />
    </Grid2>
  );
}

export default App;
