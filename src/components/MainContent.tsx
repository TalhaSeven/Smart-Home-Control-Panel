import "../styles/MainContent.css";
import Lamb from "./Lamb";
import Valve from "./Valve";
import Boiler from "./Boiler";
import Alarm from "./Alarm";
import Screen from "./Screen";
import Pals from "./Pals";
import Header from "./Header";
import { useEffect, useState } from "react";
interface SidebarItem {
  id: string;
  title: string;
  type: string; 
  status?: string;
  temperature?: number;
  position?: string;
}
interface MainContentProps {
  onAddToSidebar?: (content: SidebarItem) => void;
}
const MainContent: React.FC<MainContentProps> = ({ onAddToSidebar }) => {
  const [sortOrder, setSortOrder] = useState("all");

  const componentList = [
    {
      Component: Lamb,
      props: "Lamba1",
      type: "Lamb",
      area: "ev",
      onAddToSidebar: onAddToSidebar,
    },
    {
      Component: Valve,
      props: "Vana1",
      type: "Valve",
      area: "ev",
      onAddToSidebar: onAddToSidebar,
    },
    {
      Component: Lamb,
      props: "Lamba2",
      type: "Lamb",
      area: "ev",
      onAddToSidebar: onAddToSidebar,
    },
    {
      Component: Valve,
      props: "Vana2",
      type: "Valve",
      area: "ev",
      onAddToSidebar: onAddToSidebar,
    },
    {
      Component: Boiler,
      props: "Kombi 1",
      type: "Boiler",
      area: "dış",
      onAddToSidebar: onAddToSidebar,
    },
    {
      Component: Screen,
      props: "Perde1",
      type: "Screen",
      area: "ev",
      onAddToSidebar: onAddToSidebar,
    },
    {
      Component: Boiler,
      props: "Panel Kombi",
      type: "Boiler",
      area: "dış",
      onAddToSidebar: onAddToSidebar,
    },
    {
      Component: Lamb,
      props: "Yakut1",
      type: "Lamb",
      area: "ev",
      onAddToSidebar: onAddToSidebar,
    },
    {
      Component: Alarm,
      props: "Alarm1",
      type: "Alarm",
      area: "dış",
      onAddToSidebar: onAddToSidebar,
    },
    {
      Component: Screen,
      props: "Perde2",
      type: "Screen",
      area: "ev",
      onAddToSidebar: onAddToSidebar,
    },
    {
      Component: Pals,
      props: "Pals1",
      type: "Pals",
      area: "dış",
      onAddToSidebar: onAddToSidebar,
    },
    {
      Component: Lamb,
      props: "Yakut2",
      type: "Lamb",
      area: "ev",
      onAddToSidebar: onAddToSidebar,
    },
    {
      Component: Pals,
      props: "Garaj1",
      type: "Pals",
      area: "dış",
      onAddToSidebar: onAddToSidebar,
    },
    {
      Component: Alarm,
      props: "Alarm2",
      type: "Alarm",
      area: "ev",
      onAddToSidebar: onAddToSidebar,
    },
    {
      Component: Pals,
      props: "Pals2",
      type: "Pals",
      area: "dış",
      onAddToSidebar: onAddToSidebar,
    },
    {
      Component: Screen,
      props: "Perde3",
      type: "Screen",
      area: "ev",
      onAddToSidebar: onAddToSidebar,
    },
    {
      Component: Pals,
      props: "Garaj2",
      type: "Pals",
      area: "dış",
      onAddToSidebar: onAddToSidebar,
    },
  ];

  const [sortedComponents, setSortedComponents] = useState(componentList);

  const sortByType = () => {
    const sortedList = [...componentList].sort((a, b) => a.type.localeCompare(b.type));
    return sortedList;
  };
  
  const sortByArea = () => {
    const sortedList = [...componentList].sort((a, b) => a.area.localeCompare(b.area));
    return sortedList;
  };
  
  const sortByAz = () => {
    const sortedList = [...componentList].sort((a, b) => a.props.localeCompare(b.props));
    return sortedList;
  };

  useEffect(() => {
    switch (sortOrder) {
      case "type":
        setSortedComponents(sortByType());
        break;
      case "area":
        setSortedComponents(sortByArea());
        break;
      case "az":
        setSortedComponents(sortByAz());
        break;
      default:
        setSortedComponents(componentList);
        break;
    } // eslint-disable-next-line
  }, [sortOrder]);

  return (
    <div className="main">
      <Header setSortOrder={setSortOrder} />
      <div className="categories">
        {sortedComponents.map((item, index) => (
          <item.Component
            key={index}
            props={item.props}
            onAddToSidebar={onAddToSidebar}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
