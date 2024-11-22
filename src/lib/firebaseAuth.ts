import { auth } from "./firebaseConfig";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

// Initialize Firebase auth
// const auth = getAuth();

// Sign in with email and password
export const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error; // Forward error to the component for handling
  }
};

// Sign up with email and password
export const signUpWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

//Logout
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User successfully logged out.");
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
}
