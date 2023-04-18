"use client";
import { createContext, useContext, useState } from "react";

export interface NavContextInterface {
  showNav: boolean;
  updateNav: () => void;
}

const NavContext = createContext<NavContextInterface | null>(null);

export const useNav = () => {
  return useContext(NavContext);
};

export const NavContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showNav, setShowNav] = useState(false);

  const updateNav = () => {
    setShowNav(!showNav);
  };

  return (
    <NavContext.Provider value={{ showNav, updateNav }}>
      {children}
    </NavContext.Provider>
  );
};
