import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="d-flex flex-column">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Layout;
