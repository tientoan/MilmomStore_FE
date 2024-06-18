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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="productDetail/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />}/>
        </Route>

        <Route element={<AuthLayout width="w-1/3"/>}>
          <Route path="register" element={<Register />}/>
        </Route>

        <Route path="forgotPassword" element={<ForgotPassword />}/>

        <Route path="unvalidEmail" element={<UnvalidEmail />}/>

        <Route path="validEmail" element={<ValidEmail />}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
