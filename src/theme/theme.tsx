import React, { createContext, ReactNode, useState } from 'react';

export const ColoModeContext = createContext({
  mode: 'light' as 'light' | 'dark',
  toggleColorMode: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleColorMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <ColoModeContext.Provider
      value={{
        mode,
        toggleColorMode,
      }}
    >
      {children}
    </ColoModeContext.Provider>
  );
};
