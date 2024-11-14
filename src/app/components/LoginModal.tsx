import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { auth } from "@/lib/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { logInWithEmailAndPassword } from "@/lib/firebaseAuth";
import { useRouter } from "next/navigation";

interface LoginModalProps {
  closeModal: () => void;
  onOpenSignUp: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({closeModal, onOpenSignUp}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state before each login attempt

    try {
      const user = await logInWithEmailAndPassword(email, password);
      console.log("User logged in:", user);
      closeModal(); // Close modal on successful login
      router.push("/ForYou")
    } catch (error) {
      setError("Failed to log in. Please check your email and password.");
    }
  };

  const handleOutsideClick = (event: React.MouseEvent) => {
    if ((event.target as HTMLElement).classList.contains("modal-overlay")) {
      closeModal();
    }
  }

  const handleGuestLogin = () => {
    signInWithEmailAndPassword(auth, 'guest@gmail.com', 'guest123')
    .then((userCredential) => {
      //Sign In
      const user = userCredential.user;
      console.log(user);
      router.push("/ForYou")
      closeModal();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  }

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Google sign-in successful");
      closeModal();
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/[.75] flex flex-col justify-center items-center modal-overlay" onClick={handleOutsideClick}>
      <div className="modal__container bg-white w-[350px] rounded-md overflow-hidden">
        <div className="relative w-full flex flex-col items-center justify-center">
          <button className="text-black text-3xl absolute right-2 top-2">
            <CgClose onClick={closeModal} />
          </button>
          <h1 className="auth__title font-bold text-gray-900 mt-10 mb-5">
            Log in to Summarist
          </h1>
          <div className="auth__form w-full flex flex-col px-7 relative">
            <button className="guest__btn--wrapper relative w-full bg-[#3A579D] text-white flex py-2 px-4 m-auto rounded-lg hover:bg-[#25396b]" onClick={handleGuestLogin}>
              <figure className="google__icon--mask guest__icon--mask text-2xl absolute left-2">
                <FaUser />
              </figure>
              <div className="">Login as a Guest</div>
            </button>
            <div className="auth__separator w-full flex flex-row items-center my-3">
              <div className="bg-gray-300 h-[2px] w-full mr-6"></div>
              <span className="auth__separator--text"> or </span>
              <div className="bg-gray-300 h-[2px] w-full ml-6"></div>
            </div>
            <button onClick={handleGoogleLogin} className="guest__btn--wrapper w-full bg-[#4285F4] text-white flex py-2 px-4 m-auto rounded-lg relative items-center hover:bg-[#3367d6]">
              <figure className="google__icon--mask guest__icon--mask absolute left-1">
                <img
                  className="bg-white w-8 h-8 rounded-md p-1"
                  src="google.png"
                  alt="google"
                />
              </figure>
              <div className="">Login with Google</div>
            </button>
            <div className="auth__separator w-full flex flex-row items-center my-3">
              <div className="bg-gray-300 h-[2px] w-full mr-6"></div>
              <span className="auth__separator--text"> or </span>
              <div className="bg-gray-300 h-[2px] w-full ml-6"></div>
            </div>
            <form onSubmit={handleLogin} className="auth__main--form flex flex-col gap-4 w-full">
              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 text-xs w-full border-2 border-gray rounded-md focus:border-green-500 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 text-xs w-full border-2 border-gray rounded-md focus:border-green-500 outline-none"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <button type="submit" className="btn">Login</button>
            </form>
          </div>
          <div className="text-sm font-extralight text-blue-700 my-4 mb-15">
            Forgot your Password?
          </div>
          <button onClick={onOpenSignUp} className="text-sm font-extralight text-blue-700  w-full h-[40px] bg-gray-200 hover:bg-gray-300">
            Don't Have an Account?
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
