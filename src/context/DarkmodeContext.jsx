import { useState, createContext } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const valueShare = { isDarkMode, toggleDarkMode };

  return (
    <DarkModeContext.Provider value={valueShare}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
