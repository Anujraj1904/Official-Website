import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Studio from "./pages/Studio";
import Contact from "./pages/Contact";

import ScrollToTop from "./utils/ScrollToTop";


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
