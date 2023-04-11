import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./App/components/Header";
import {
  About,
  Blog,
  Contact,
  Home,
  Login,
  Profile,
  Services,
} from "./App/screens";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<p>TODO: Not found</p>} />
      </Routes>
    </>
  );
};

export default App;
