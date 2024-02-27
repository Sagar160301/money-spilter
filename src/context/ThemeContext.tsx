import React, { ReactNode, createContext, useState } from 'react';

type Theme = 'light' | 'dark';
interface IThemeContext {
  theme: Theme;
  handleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  handleTheme: () => {},
});
const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>((localStorage.getItem('theme') as Theme) || 'light');

  const handleTheme = () => {
    setTheme((pre) => {
      const selectTheme = pre === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', selectTheme);
      return selectTheme;
    });
  };
  return <ThemeContext.Provider value={{ theme, handleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
