import React from "react";
import NavBar from "../components/navbar/index.jsx";

function Home() {
  // console.log("Home!");
  return (
    <div>
      <NavBar />

      <p>This is the home page content!</p>
      <p>I wrote this and it was added to the website via a workflow deploy to azure</p>
      <p>All I do is test these days</p>
    </div>
  )
}

export default Home;