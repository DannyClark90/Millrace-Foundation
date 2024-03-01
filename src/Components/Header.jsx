import React from 'react'
import '../Sass/Components/_header.scss'

export default function Header() {
  return (
    <header className="header">
      <div className="header__bg-img">
        <h1 className="heading-primary">
          <span class="heading-primary--main">Welcome to The millrace foundation</span>
          <span class="heading-primary--sub">Action On Mental Health</span>
        </h1>
      </div>
      <img className='header__logo' src="src/assets/Millrace Outline mod.png" alt="" />
    </header>
  )
};
