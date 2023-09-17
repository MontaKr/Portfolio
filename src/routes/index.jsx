import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import AboutWrap from "../pages/About/AboutWrap";
import ContactWrap from "../pages/Contact/ContactWrap";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutWrap />} />
      <Route path="/contact" element={<ContactWrap />} />
    </Routes>
  );
}
