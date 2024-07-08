// PasswordChangeContext.tsx
import React, { createContext, useContext, useState } from 'react';

type PasswordChangeContextType = {
  passwordChange: boolean;
  setPasswordChange: (value: boolean) => void;
};

const initialContext: PasswordChangeContextType = {
  passwordChange: false,
  setPasswordChange: () => {}, // Placeholder function
};

const PasswordChangeContext = createContext<PasswordChangeContextType>(initialContext);

export const usePasswordChange = () => {
  const context = useContext(PasswordChangeContext);
  if (!context) {
    throw new Error('usePasswordChange must be used within a PasswordChangeProvider');
  }
  return context;
};

type PasswordChangeProviderProps = {
  children: React.ReactNode; // Define children prop explicitly
};

export const PasswordChangeProvider: React.FC<PasswordChangeProviderProps> = ({ children }) => {
  const [passwordChange, setPasswordChange] = useState<boolean>(false);

  return (
    <PasswordChangeContext.Provider value={{ passwordChange, setPasswordChange }}>
      {children}
    </PasswordChangeContext.Provider>
  );
};
