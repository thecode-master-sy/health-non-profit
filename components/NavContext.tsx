"use client";
import { createContext, useContext, useState } from "react";

export interface NavContextInterface {
  showNav: boolean;
  updateNav: (value:boolean) => void;
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

  const updateNav = (value:boolean) => {
    setShowNav(value);
  };

  return (
    <NavContext.Provider value={{ showNav, updateNav }}>
      {children}
    </NavContext.Provider>
  );
};
