import { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext();

const contrasts = {
  light: {
    ui: 'hsl(0, 0%, 96%)',
    text: 'hsl(0, 0%, 7%)',
  },
  dark: {
    ui: 'hsl(0, 0%, 7%)',
    text: 'hsl(0, 0%, 96%)',
  },
};

export const useThemeSwitcher = (initialValue) => {
  const [color, setColor] = useState(initialValue);
  return [color, setColor];
};

const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [color, setColor] = useState(contrasts.light);

  useEffect(() => {
    setColor(isLightTheme ? contrasts.light : contrasts.dark);
  }, [isLightTheme]);
  console.log({ color, isLightTheme });

  return (
    <ThemeContext.Provider value={{ isLightTheme, color }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
