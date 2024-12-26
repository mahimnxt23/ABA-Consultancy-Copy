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
import ConsultationForm from "./ClientSide/BookConsultancy/BookConsultaion";
import ChooseUs from "./ClientSide/AboutUs/ChooseUs/ChooseUs";
import Team from "./ClientSide/AboutUs/Team/Team";
import OurPackagesBanner from "./ClientSide/ourPackages/OurPackagesBanner/ourPackagesBanner";
import OurPackages from "./ClientSide/ourPackages/ourPackages";

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
        path: "/consultation",
        element: <ConsultationForm></ConsultationForm>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/ChooseUs",
        element: <ChooseUs></ChooseUs>,
      },
      {
        path: "/ourTeam",
        element: <Team></Team>,
      },
      {
        path: "/ourPackages",
        element: <OurPackages></OurPackages>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
