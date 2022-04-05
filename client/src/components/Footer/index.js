import React from 'react';
//import { Link } from "react-router-dom";

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github-square",
      link: "https://github.com/Marisa28"
    },
    {
      name: "fab fa-amazon",
      link: "https://amazon.com"
    },
    {
      name: "fab fa-instagram",
      link: "https://www.instagram.com/finewaters/"
    },
    {
      name: "fab fa-youtube",
      link: "https://www.youtube.com/user/finewaters"
    },
    {
      name: "fab fa-google",
      link: "https://google.com"
    },
    {
      name: "fab fa-gitkraken",
      link: "https://github.com/vasqc/New-World-Water"
    },

  ]

  return (
    <footer>
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;