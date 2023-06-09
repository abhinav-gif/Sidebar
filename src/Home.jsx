import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
const Home = () => {
  const { isSidebarOpen, setIsSidebarOpen, setIsModalOpen } =
    useGlobalContext();
  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars />
      </button>
      <button
        className="btn"
        type="button"
        onClick={() => setIsModalOpen(true)}
      >
        Show Modal
      </button>
    </main>
  );
};

export default Home;
