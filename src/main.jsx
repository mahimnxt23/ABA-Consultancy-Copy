import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./index.css";
import Navbar from "./ClientSide/Shared/Navbar/Navbar";
import Footer from "./ClientSide/Shared/Footer/Footer";
import Home from "./ClientSide/Home/Home";
import AboutUs from "./ClientSide/AboutUs/AboutUs";
import Service from "./ClientSide/Service/Service";
import Layout from "./ClientSide/Main";
import ContactUs from "./ClientSide/ContactUs/ContactUs";

// Parent Layout Component

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
