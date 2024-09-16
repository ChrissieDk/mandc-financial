import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import SignInModal from "./components/SignIn";
import Dashboard from "./components/Dashboard";

const AppContent: React.FC = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (email: string, password: string) => {
    // Implement sign-in logic here
    navigate("/dashboard");
    setIsSignInModalOpen(false);
  };

  return (
    <div className="relative">
      <NavBar onSignInClick={() => setIsSignInModalOpen(true)} />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
        onSignIn={handleSignIn}
      />
    </div>
  );
};

export default AppContent;
