import React, { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="theme-toggle-container">
      <button className="toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;
