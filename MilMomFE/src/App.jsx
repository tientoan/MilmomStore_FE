import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "./layouts/mainLayout";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import AuthLayout from "./layouts/authLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import UnvalidEmail from "./pages/Auth/UnvalidEmail";
import ValidEmail from "./pages/Auth/ValidEmail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import ProtectedLayout from "./layouts/protectedLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route element={<AuthLayout width="w-1/3" />}>
          <Route path="register" element={<Register />} />
        </Route>

        <Route element={<ProtectedLayout />}>
          <Route path="forgotPassword" element={<ForgotPassword />} />

          <Route path="unvalidEmail" element={<UnvalidEmail />} />

          <Route path="validEmail" element={<ValidEmail />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="productDetail/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RecoilRoot>
        <RouterProvider router={router} />
        <ToastContainer />
      </RecoilRoot>
    </>
  );
}

export default App;
