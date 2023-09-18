import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import AboutWrap from "../pages/About/AboutWrap";
import ContactWrap from "../pages/Contact/ContactWrap";
import SkillsWrap from "../pages/Skills/SkillsWrap";

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutWrap />} />
      <Route path="/contact" element={<ContactWrap />} />
      <Route path="/skills" element={<SkillsWrap />} />
    </Routes>
  );
}
