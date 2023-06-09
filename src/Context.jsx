import { createContext, useContext, useState } from "react";

const Appcontext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Appcontext.Provider
      value={{ isSidebarOpen, isModalOpen, setIsSidebarOpen, setIsModalOpen }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext = () => useContext(Appcontext);
