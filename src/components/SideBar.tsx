import { RiAlarmWarningFill } from "react-icons/ri";
import "../styles/SideBar.css";
import {
  FaArrowDown,
  FaCaretDown,
  FaCaretUp,
  FaEquals,
  FaRegLightbulb,
} from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { CgSmartHomeBoiler } from "react-icons/cg";
import { GiHomeGarage } from "react-icons/gi";
import { PiProjectorScreenLight } from "react-icons/pi";
import { GrNavigate } from "react-icons/gr";

interface SidebarItem {
  id: string;
  title: string;
  type: string;
  status?: string;
  temperature?: number;
  position?: string;
}

interface SidebarProps {
  content: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ content }) => {
  const [newContentState, setNewContentState] =
    useState<SidebarItem[]>(content);
  const [deletedItems, setDeletedItems] = useState<string[]>([]);
  const [delays, setDelays] = useState<{ [key: string]: number }>({});
  const findItemIndexById = (id: string) => {
    return newContentState.findIndex((item) => item.id === id);
  };
  useEffect(() => {
    setNewContentState(
      content.filter((item) => !deletedItems.includes(item.id))
    );
  }, [content, deletedItems]);

  const moveUp = (id: string) => {
    const index = findItemIndexById(id);
    if (index <= 0) return;
    const newContent = [...newContentState];
    [newContent[index], newContent[index - 1]] = [
      newContent[index - 1],
      newContent[index],
    ];
    setNewContentState(newContent);
  };

  const moveDown = (id: string) => {
    const index = findItemIndexById(id);
    if (index < 0 || index === newContentState.length - 1) return;
    const newContent = [...newContentState];
    [newContent[index], newContent[index + 1]] = [
      newContent[index + 1],
      newContent[index],
    ];
    setNewContentState(newContent);
  };

  const removeItem = (id: string) => {
    setDeletedItems((prev) => [...prev, id]);
    setNewContentState((prev) => prev.filter((item) => item.id !== id));
  };
  const incrementDelay = (id: string, amount: number) => {
    setDelays((prevDelays) => ({
      ...prevDelays,
      [id]: (prevDelays[id] || 0) + amount,
    }));
  };

  const decrementDelay = (id: string, amount: number) => {
    setDelays((prevDelays) => ({
      ...prevDelays,
      [id]: Math.max(0, (prevDelays[id] || 0) - amount),
    }));
  };

  const renderItemContent = (item: SidebarItem) => {
    switch (item.type) {
      case "Alarm":
        const isInside = item.status === `in${item.title}`;
        return (
          <>
            <label>{item.title}</label>
            <div className="control-icon">
              <RiAlarmWarningFill size="35px" />
            </div>
            <div className="side-actions">
              {isInside ? (
                <label htmlFor={`in`}>Ev</label>
              ) : (
                <label htmlFor={`out`}>Dış</label>
              )}
            </div>
          </>
        );
      case "Boiler":
        return (
          <>
            <label>{item.title}</label>
            <CgSmartHomeBoiler size="35px" />
            <div className="temp-display">{item.temperature}°C</div>
          </>
        );
      case "Lamb":
        const isOn = item.status === `on${item.title}`;
        return (
          <>
            <label>{item.title}</label>
            <div className="control-icon">
              <FaRegLightbulb size="35px" />
            </div>
            <div className="side-actions">
              {isOn ? (
                <label htmlFor={`on`}>I</label>
              ) : (
                <label htmlFor={`off`}>O</label>
              )}
            </div>
          </>
        );
      case "Pals":
        return (
          <>
            <span>
              {item.title}
            </span>
            <GiHomeGarage size="35px" />
          </>
        );
      case "Screen":
        return (
          <>
            <label>{item.title}</label>
            <div className="control-icon">
              <PiProjectorScreenLight size="35px" />
            </div>
            <div className="side-actions">
              {item.position === `up${item.title}` && (
                <FaCaretUp
                style={{
                  color: "aqua",
                  backgroundColor: "rgb(0,0,0,0.3)",
                  border: "1px solid aqua",
                  borderRadius: "5px",
                  width: "30px",
                  height: "30px",
                  padding: "5px",
                }}
                />
              )}
              {item.position === `eq${item.title}` && (
                <FaEquals
                style={{
                  color: "aqua",
                  backgroundColor: "rgb(0,0,0,0.3)",
                  border: "1px solid aqua",
                  borderRadius: "5px",
                  width: "30px",
                  height: "30px",
                  padding: "5px",
                }}
                />
              )}
              {item.position === `down${item.title}` && (
                <FaCaretDown
                  style={{
                    color: "aqua",
                    backgroundColor: "rgb(0,0,0,0.3)",
                    border: "1px solid aqua",
                    borderRadius: "5px",
                    width: "30px",
                    height: "30px",
                    padding: "5px",
                  }}
                />
              )}
            </div>
          </>
        );
      case "Valve":
        const isValve = item.status === `on${item.title}`;
        return (
          <>
            <label>{item.title}</label>
            <div className="control-icon">
              <GrNavigate size="35px" />
            </div>
            <div className="side-actions">
              {isValve ? (
                <label htmlFor={`on`}>I</label>
              ) : (
                <label htmlFor={`off`}>O</label>
              )}
            </div>
          </>
        );
      default:
        return <span>{item.title}</span>;
    }
  };
  const renderDelayControls = (id: string) => {
    const delay = delays[id] || 0;
    return (
      <div className="delay-controls">
        <span>Gecikme Süresi</span>
        <button onClick={() => decrementDelay(id, 10)}>-10</button>
        <button onClick={() => decrementDelay(id, 1)}>-1</button>
        <label>{delays[id] || 0} sn</label>
        <button onClick={() => incrementDelay(id, 1)}>+1</button>
        <button onClick={() => incrementDelay(id, 10)}>+10</button>
      </div>
    );
  };

  return (
    <div className="sidebar">
      {newContentState.map((item) => (
        <div key={item.id} className="side-panel">
          {renderDelayControls(item.id)}
          <div className="side-control">
            {renderItemContent(item)}
            <div className="control-button">
              <button onClick={() => moveDown(item.id)}>
                <FaArrowDown size="25px" />
              </button>
              <button onClick={() => moveUp(item.id)}>
                <FaArrowUp size="25px" />
              </button>
              <button onClick={() => removeItem(item.id)}>
                <FaRegTrashAlt size="25px" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
