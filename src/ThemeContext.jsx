import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [era, setEra] = useState('riot'); 

  const toggleTheme = () => {
    setEra((prev) => (prev === 'riot' ? 'laugh' : 'riot'));
  };

  const themeStyles = {
    backgroundColor: era === 'riot' ? '#333' : '#fefefe',
    color: era === 'riot' ? '#f57b42' : '#ff0055', // Laranja Riot vs Rosa After Laughter
    padding: '20px',
    minHeight: '100vh',
    transition: '0.3s all'
  };

  return (
    <ThemeContext.Provider value={{ era, toggleTheme, themeStyles }}>
      <div style={themeStyles}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Hook personalizado para facilitar o uso
export const useTheme = () => useContext(ThemeContext);