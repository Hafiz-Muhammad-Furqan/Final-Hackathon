import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  isReset: false,
  setIsReset: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isReset, setIsReset] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, isReset, setIsReset }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
