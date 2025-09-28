import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ComponentLogo from "./components/ComponentLogo";
import PurposeSection from "./components/PurposeSection";
import Features from "./components/Features";
import ScheduleSection from "./components/ScheduleSection";
import Monitoring from "./components/Monitoring";
import Pricing from "./components/Pricing";
import ServiceSection from "./components/ServiceSection";
import Testimonial from "./components/Testimonial";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden ">
        <NavBar />
        <Hero />
        <ComponentLogo />
        <PurposeSection />
        <Features />
        <ScheduleSection />
        <Monitoring />
        <Pricing />
        <ServiceSection />
        <Testimonial />
        <NewsLetter />
        <Footer />
      </div>
    </main>
  );
};

export default App;
