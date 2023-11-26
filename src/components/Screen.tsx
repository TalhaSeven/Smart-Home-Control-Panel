import React, { useState } from "react";
import { FaCaretDown, FaCaretUp, FaEquals } from "react-icons/fa";
import { PiProjectorScreenLight } from "react-icons/pi";

interface ScreenProps {
  props: string;
  onAddToSidebar?: (content: { id: string; title: string; position: string; type:string }) => void;
}

const Screen: React.FC<ScreenProps> = ({ props, onAddToSidebar }) => {
  const screen = props;
  const [selectRadio, setSelectRadio] = useState(screen);
  const handleClick = () => {
    const uniqueId = `screen-${Date.now()}`;
    if (onAddToSidebar) {
      onAddToSidebar({ id: uniqueId, title: props, position: selectRadio, type: "Screen" });
    }
  };
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectRadio(e.target.value);
  };
  return (
    <div className="control-panel">
      <div className="control">
        <label htmlFor="">{screen}</label>
        <div className="control-icon">
          <PiProjectorScreenLight size="35px" />
        </div>
        <div className="control-actions">
          <input
            className="radio"
            type="radio"
            id={`up${screen}`}
            name={`controll${screen}`}
            value={`up${screen}`}
            onChange={handleRadioChange}
          />
          <label htmlFor={`up${screen}`}>
            <FaCaretUp />
          </label>
          <input
            className="radio"
            type="radio"
            id={`eq${screen}`}
            name={`controll${screen}`}
            value={`eq${screen}`}
            defaultChecked
            onChange={handleRadioChange}
          />
          <label htmlFor={`eq${screen}`}>
            <FaEquals />
          </label>
          <input
            className="radio"
            type="radio"
            id={`down${screen}`}
            name={`controll${screen}`}
            value={`down${screen}`}
            onChange={handleRadioChange}
          />
          <label htmlFor={`down${screen}`}>
            <FaCaretDown />
          </label>
        </div>
        <button className="add-button" onClick={handleClick}>EKLE</button>
      </div>
    </div>
  );
};

export default Screen;
