import React, { useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";

interface LambProps {
  props: string;
  onAddToSidebar?: (content: { id: string; title: string; status: string; type:string }) => void;
}

const Lamb: React.FC<LambProps> = ({ props, onAddToSidebar }) => {
  const lamb = props;
  const [selectRadio, setSelectRadio] = useState(lamb);
  const handleClick = () => {
    const uniqueId = `lamb-${Date.now()}`;
    if (onAddToSidebar) {
      onAddToSidebar({ id: uniqueId, title: props, status: selectRadio, type: "Lamb" });
    }
  };
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectRadio(e.target.value);
  };

  return (
    <div className="control-panel">
      <div className="control">
        <label>{lamb}</label>
        <div className="control-icon">
          <FaRegLightbulb size="30px" />
        </div>
        <div className="control-actions">
          <input
            className="radio"
            type="radio"
            id={`on${lamb}`}
            name={`controlLamb${lamb}`}
            value={`on${lamb}`}
            defaultChecked
            onChange={handleRadioChange}
          />
          <label htmlFor={`on${lamb}`}>I</label>
          <input
            className="radio"
            type="radio"
            id={`off${lamb}`}
            name={`controlLamb${lamb}`}
            value={`off${lamb}`}
            onChange={handleRadioChange}
          />
          <label htmlFor={`off${lamb}`}>O</label>
        </div>

        <button className="add-button" onClick={handleClick}>
          EKLE
        </button>
      </div>
    </div>
  );
};

export default Lamb;
