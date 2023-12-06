import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "../pages/pagPersonalizadaUser/HomePage";
import { AboutPage } from "../pages/pagPersonalizadaUser/AboutPage";
import { ChatPage } from "../pages/pagPersonalizadaUser/ChatPage";
import { Navbar } from "../components/UserPersonalizado/NavbarUser";
import { BackAndForward } from "../components/UserPersonalizado/BlackAndForward";

const MainRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("lastPath", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <BackAndForward />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/sidebar" element={<Sidebar />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/chat" element={<ChatPage />} />

        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
