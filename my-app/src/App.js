import React, { useState } from "react";
import ContextComponent from "./themeContext";
export const ThemeContext = React.createContext();
function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const themeHandler = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={themeHandler}>Toggle</button>
        <ContextComponent></ContextComponent>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
