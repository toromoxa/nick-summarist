"use client"
import { Provider } from "react-redux";
import store from "../../store/store";
import HomePage from "./Home/page";


export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
