import { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Sidebar from "./components/SideBar";
interface SidebarItem {
  id: string;
  title: string;
  type: string; 
  status?: string;
  temperature?: number;
  position?: string;
}
function App() {// eslint-disable-next-line
  const [sidebarContent, setSidebarContent] = useState<SidebarItem[]>([]);

  const handleAddToSidebar = (content: SidebarItem) => {
    setSidebarContent([...sidebarContent, content]);
  };

  return (
      <div className="app">
      <MainContent onAddToSidebar={handleAddToSidebar} />
      <Sidebar content={sidebarContent} />
      </div>
  );
}

export default App;
