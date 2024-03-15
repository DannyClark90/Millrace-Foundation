import React from "react";
import Header from "../Components/Header";
import Mission from "../Components/Mission";
import Issues from "../Components/Issues";
import "../Sass/Pages/_home.scss";
import CreateChange from "../Components/CreateChange";
import LocalBenefits from "../Components/LocalBenefits";
import Reviews from "../Components/Reviews";

export default function Home() {
  return (
    <>
      <Header />
      <main className="home">
        <Mission/>
        <Issues/>
        <CreateChange/>
        <LocalBenefits/>
        <Reviews/>
      </main>
    </>
  );
}
