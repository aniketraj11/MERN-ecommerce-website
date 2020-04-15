import React from "react";
import "../styles.css";
import { API } from "./../backend";
import Base from "./Base";

export default function Home() {
  console.log("API is : ", API);

  return (
    <Base title="Home Page" description="Welcome to the t-shirts store">
      <h1 className="text-white">Hello</h1>
    </Base>
  );
}
