import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./Firebase";

export const userRegister = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const userLogin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const userLogout = () => {
  return signOut(auth);
};
