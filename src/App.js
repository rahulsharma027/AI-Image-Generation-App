import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
  Header2,
  Login,
  Generate,
  Community,
  Contact,
  Aboutus,
} from "./containers";
import { CTA, Brand, Navbar, Navbar2 } from "./components";

import "./App.css";
import Welcome from "./components/Welcome/Welcome";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <div className="gradient__bg">
                  <Navbar />
                  <Header />
                </div>
                <Brand />
                <WhatGPT3 />
                <Features />
                <Possibility />
                <CTA />
                <Blog />
                <Footer />
              </div>
            }
          />

          <Route
            path="/community"
            element={
              <div>
                <Navbar2 />
                <Community />
                <Footer />
              </div>
            }
          />
          <Route
            path="/about-us"
            element={
              <div>
                <Navbar2 />
                <Aboutus />
                <Footer />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <Navbar2 />
                <Login />
              </div>
            }
          />
          <Route
            path="/contact-us"
            element={
              <div>
                <Navbar2 />
                <Contact />
              </div>
            }
          />
          <Route
            path="/generate"
            element={
              <div>
                <Navbar2 />
                <Generate />
              </div>
            }
          />
          <Route
            path="/logout"
            element={
              <div>
                <Navbar2 />
                <Generate />
              </div>
            }
          />


          <Route
            path="/welcome"
            element={
              <div>
                <Navbar2 />
                <Welcome />
                <Brand />
                <WhatGPT3 />
                <Features />
                <Possibility />
                <CTA />
                <Blog />
                <Footer />
              </div>
            }
          />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
