import React, { useState } from "react";
import { GrNavigate } from "react-icons/gr";

interface ValveProps {
  props: string;
  onAddToSidebar?: (content: { id: string; title: string; status: string; type:string }) => void;
}

const Valve: React.FC<ValveProps> = ({  props, onAddToSidebar  }) => {
  const valve = props;
  const [selectRadio, setSelectRadio] = useState(valve);
  const handleClick = () => {
    const uniqueId = `valve-${Date.now()}`;
    if (onAddToSidebar) {
      onAddToSidebar({ id: uniqueId, title: props, status: selectRadio, type: "Valve" });
    }
  };
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectRadio(e.target.value);
  };
  return (
    <div className="control-panel">
      <div className="control">
        <label htmlFor="">{valve} </label>
        <div className="control-icon">
          <GrNavigate size="30px" />
        </div>
        <div className="control-actions">
          <input
            className="radio"
            type="radio"
            id={`on${valve}`}
            name={`control${valve}`}
            value={`on${valve}`}
            defaultChecked
            onChange={handleRadioChange}

          />
          <label htmlFor={`on${valve}`}>I</label>
          <input
            className="radio"
            type="radio"
            id={`off${valve}`}
            name={`control${valve}`}
            value={`off${valve}`}
            onChange={handleRadioChange}
          />
          <label htmlFor={`off${valve}`}>O</label>
        </div>
        <button className="add-button" onClick={handleClick}>EKLE</button>
      </div>
    </div>
  );
};

export default Valve;
