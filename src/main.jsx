import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Navbar from "./ClientSide/Shared/Navbar/Navbar";
import Footer from "./ClientSide/Shared/Footer/Footer";
import Home from "./ClientSide/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/navbar",
    element: <Navbar></Navbar>,
  },
  {
    path: "/footer",
    element: <Footer></Footer>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
