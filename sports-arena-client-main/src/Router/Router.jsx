import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import AllEquipment from "../pages/AllEquipment";
import AddEquipmentPage from "../pages/AddEquipmentPage";
import ProtectedRoute from "./ProtectedRoute";
import ProductDetails from "../pages/ProductDetails";
import MyEquipments from "../pages/MyEquipments";
import ProductUpdate from "../pages/ProductUpdate";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/all-equipment",
        element: <AllEquipment></AllEquipment>
      },
      {
        path: "/add-equipment",
        element: <ProtectedRoute><AddEquipmentPage></AddEquipmentPage></ProtectedRoute>
      },
      {
        path: '/equipment-details/:id',
        element: <ProtectedRoute><ProductDetails></ProductDetails></ProtectedRoute>
      },
      {
        path: '/update/:id',
        element: <ProtectedRoute><ProductUpdate></ProductUpdate></ProtectedRoute>,
      },
      {
        path: '/my-equipment',
        element: <ProtectedRoute><MyEquipments></MyEquipments></ProtectedRoute>
      }
    ],
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);

export default Router;
