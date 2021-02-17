import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(false);

export const ThemeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{
      darkMode,
      setDarkMode
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

