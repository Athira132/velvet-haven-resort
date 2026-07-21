import React, { createContext, useContext, useState, useEffect } from 'react';
import { RESORT_CONFIG } from '../config/resortConfig';

type ThemeMode = 'day' | 'night';

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  heroImage: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('day');

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'day' ? 'night' : 'day'));
  };

  useEffect(() => {
    if (themeMode === 'night') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  }, [themeMode]);

  const heroImage = themeMode === 'day' ? RESORT_CONFIG.images.hero1 : RESORT_CONFIG.images.hero2;

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme, heroImage }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
