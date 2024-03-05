import React from "react";
import "../Sass/Layout/_header.scss";

export default function Header() {
  return (
    <>
      <header className="header">
        <h1 className="heading-primary">
          <span className="heading-primary--main">
            Welcome to The millrace foundation
          </span>
          <span className="heading-primary--sub">Action On Mental Health</span>
        </h1>
      </header>
    </>
  );
}
