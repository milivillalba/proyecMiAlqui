import React from "react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Routes, Route } from "react-router-dom";
import { Public } from "../pages/validarPublic/public";
import { Main } from "../pages/pagInicio/Mialqui";
import { Contact } from "../components/contact/contact";
import { FormAlqui } from "../pages/registroAlquiler/FormAlqui";
import { AdminAloj } from "../pages/admin/adminAloj";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { RegisterPage } from "../pages/registerUser/RegisterPages";
import LoginPage from "../pages/loginUser/LoginPages";
import MainRoutes from "./UserMainRoutes";

import { Alojamientos } from "../pages/Alojamientos/Alojamientos";
import About from "../pages/SobreNosotros/About";

export const AppRouter = () => {
  const { login, logout, authState } = useContext(AuthContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("token"));

    if (user && token) {
      login({ user, token });
      return;
    } else {
      logout();
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return;
    }
  }, [authState.logged]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoutes>
            <Main />
          </PublicRoutes>
        }
      />
      <Route
        path="/public"
        element={
          <PublicRoutes>
            <Public />
          </PublicRoutes>
        }
      />
      <Route
        path="/Contact"
        element={
          <PublicRoutes>
            <Contact />
          </PublicRoutes>
        }
      />
      <Route
        path="/Nosostros"
        element={
          <PublicRoutes>
            <About />
          </PublicRoutes>
        }
      />
      <Route
        path="/registerAlqui"
        element={
          <PublicRoutes>
            <FormAlqui />
          </PublicRoutes>
        }
      />
      <Route
        path="/adminAloj"
        element={
          <PublicRoutes>
            <AdminAloj />
          </PublicRoutes>
        }
      />
      <Route
        path="auth/register"
        element={
          <PublicRoutes>
            <RegisterPage />{" "}
          </PublicRoutes>
        }
      />
      <Route
        path="auth/login"
        element={
          <PublicRoutes>
            <LoginPage />{" "}
          </PublicRoutes>
        }
      />
      <Route
        path="/AdminUser"
        element={
          <PrivateRoutes>
            <MainRoutes />{" "}
          </PrivateRoutes>
        }
      />
      <Route
        path="/AlquileresList"
        element={
          <PublicRoutes>
            <Alojamientos />
          </PublicRoutes>
        }
      />

      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};
