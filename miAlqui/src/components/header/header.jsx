import React from "react";
import { Navbar } from "./Navbar";
import "./header.css";

export const Header = () => {
  return (
    <header className="mb-auto col-md-6 header">
      <div className="contenedorHeader  cover-container">
        <Navbar />
      </div>
    </header>
  );
}; 
