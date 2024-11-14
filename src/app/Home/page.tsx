import React, { useState, FC } from "react";
import { auth, db } from "@/lib/firebaseConfig";
import Navbar from "../components/Navbar";
import Landing from "./Landing";
import Features from "./Features";
import Reviews from "./Reviews";
import Numbers from "./Numbers";
import Footer from "./Footer";
import LoginModal from "../components/LoginModal";
import SignUpModal from "../components/SignUpModal";

const HomePage: FC = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
    setIsSignUpModalOpen(false);
  }

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
    setIsSignUpModalOpen(false);
  }

  const handleSignUpClick = () => {
    setIsLoginModalOpen(false);
    setIsSignUpModalOpen(true);
  }

  return (
    <div>
      <Navbar onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick}/>
      <Landing onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} />
      <Features />
      <Reviews onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick}/>      
      <Numbers />
      <Footer />
      {isLoginModalOpen && (
          <LoginModal closeModal={handleCloseModal} onOpenSignUp={handleSignUpClick} />
        )}
        {isSignUpModalOpen && (
          <SignUpModal closeModal={handleCloseModal} onOpenLoginModal={handleLoginClick} />
        )}
    </div>
  );
};

export default HomePage;
