import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { signUpWithEmailAndPassword } from "@/lib/firebaseAuth";

interface SignUpModalProps {
  closeModal: () => void;
  onOpenLoginModal: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({closeModal, onOpenLoginModal}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state before each sign-up attempt

    try {
      const user = await signUpWithEmailAndPassword(email, password);
      console.log("User signed up:", user);
      closeModal(); // Close modal on successful sign-up
    } catch (error) {
      setError("Failed to sign up. Please check your email and password.");
    }
  };

  const handleOutsideClick = (event: React.MouseEvent) => {
    if ((event.target as HTMLElement).classList.contains("modal-overlay")) {
      closeModal();
    }
  }

  const handleOpenLogin = () => {
    onOpenLoginModal();
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/[.75] flex flex-col justify-center items-center modal-overlay" onClick={handleOutsideClick}>
      <div className="modal__container bg-white w-[350px] rounded-md overflow-hidden">
        <div className="relative w-full flex flex-col items-center justify-center">
          <button className="text-black text-3xl absolute right-2 top-2">
            <CgClose onClick={closeModal} />
          </button>
          <h1 className="auth__title font-bold text-gray-900 mt-10 mb-5">
            Sign up for Summarist
          </h1>
          <div className="auth__form w-full flex flex-col px-7 relative">
            <button className="w-full bg-[#4285F4] text-white flex py-2 px-4 m-auto rounded-lg relative items-center hover:bg-[#3367d6]">
              <figure className="google__icon--mask guest__icon--mask absolute left-1">
                <img
                  className="bg-white w-8 h-8 rounded-md p-1"
                  src="google.png"
                  alt="google"
                />
              </figure>
              <div className="m-auto">Sign up with Google</div>
            </button>
            <div className="auth__separator w-full flex flex-row items-center my-3">
              <div className="bg-gray-300 h-[2px] w-full mr-6"></div>
              <span className="auth__separator--text"> or </span>
              <div className="bg-gray-300 h-[2px] w-full ml-6"></div>
            </div>
            <form onSubmit={handleSignUp} className="auth__main--form flex flex-col gap-4 w-full">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 text-xs w-full border-2 border-gray rounded-md focus:border-green-500 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 text-xs w-full border-2 border-gray rounded-md focus:border-green-500 outline-none"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <button type="submit" className="btn mb-6">Sign Up</button>
            </form>
          </div>
          <button onClick={handleOpenLogin} className="text-sm font-extralight text-blue-700  w-full h-[40px] bg-gray-200 hover:bg-gray-300">
           Already have an Account?
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
