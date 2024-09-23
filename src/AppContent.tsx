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
import RepatriationPage from "./components/RepatriationPage";
import HealthCoachPage from "./components/HealthCoachPage";
import SymptomCheckerPage from "./components/SymptomCheckerPage";
import FeelBetterFastPage from "./components/FeelBetterFastPage";

const AppContent: React.FC = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const navigate = useNavigate();
  // email: string, password: string
  const handleSignIn = () => {
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
        <Route path="/products/repatriation" element={<RepatriationPage />} />
        <Route path="/products/health-coach" element={<HealthCoachPage />} />
        <Route
          path="/products/symptom-check"
          element={<SymptomCheckerPage />}
        />
        <Route
          path="/products/feel-better-fast"
          element={<FeelBetterFastPage />}
        />
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
