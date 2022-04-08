import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "../Assets/Components/Footer/Footer";
import { Navbar } from "../Assets/Components/Navbar/Navbar";
import { Routers } from "../Routers/Routers";

export const Layout = () => {
  let kondisi = true;
  return (
    <div>
      {kondisi ? (
        <>
          <Navbar />
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
          <Footer />
          
        </>
      ) : (
        <>
          <Navbar />
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
          <Footer />
        </>
      )}
    </div>
  );
};