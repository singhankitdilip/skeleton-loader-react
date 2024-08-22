import React, { useState, useEffect } from "react";
import SkeletonCard from "./SkeletonCard";
import ToggleBtn from "./ToggleBtn";
import sun from "../src/assets/sun.png";
import moon from "../src/assets/moon.png";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle the toggle button change
  const handleChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to the body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-center p-6 gap-5">
        <ToggleBtn handleChange={handleChange} isChecked={isDarkMode} />
        <div className="flex justify-center items-center gap-5">
          Current mode:{" "}
          {isDarkMode ? (
            <div><img src={moon} alt="moon" className="size-6" /></div>
          ) : (
            <div>
              <img src={sun} alt="sun" className="size-6"/>
            </div>
          )}
        </div>
      </div>
      <SkeletonCard />
    </div>
  );
};

export default App;
