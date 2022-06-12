import React from "react";
import "./NightMood.css";

const NightMood = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightMood = "light";
  const darkMood = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  if (theme === lightMood || theme === darkMood) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightMood);
  }

  const switchTheme = (e) => {
    if (theme === darkMood) {
      document.getElementById("darkMood").value = "🌞";
      body.classList.replace(darkMood, lightMood);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightMood;
    } else {
      document.getElementById("darkMood").value = "🌚";
      body.classList.replace(lightMood, darkMood);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkMood;
    }
  };

  return (
    <input
      type="button"
      value="🌓"
      className={theme === "dark" ? clickedClass : ""}
      id="darkMood"
      onClick={(e) => switchTheme(e)}
    />
  );
};

export default NightMood;
