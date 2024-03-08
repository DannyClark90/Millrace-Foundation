import React from "react";
import Header from "../Components/Header";
import Mission from "../Components/Mission";
import Issues from "../Components/Issues";
import "../Sass/Pages/_home.scss";

export default function Home() {
  return (
    <>
      <Header />
      <main className="home">
        <Mission/>
        <Issues/>
      </main>
    </>
  );
}
