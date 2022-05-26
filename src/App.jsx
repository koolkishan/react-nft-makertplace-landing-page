import React from "react";
import Choose from "./components/Choose";
import Clients from "./components/Clients";
import CreateAndSell from "./components/CreateAndSell";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MarketPlace from "./components/MarketPlace";
import ScrollToTop from "./components/ScrollToTop";
import Subscribe from "./components/Subscribe";

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Home />
      <Clients />
      <CreateAndSell />
      <Choose />
      <MarketPlace />
      <Subscribe />
      <Footer />
    </div>
  );
}
