import React, { useState } from "react";
import { GiHomeGarage } from "react-icons/gi";

interface PalsProps {
  props: string;
  onAddToSidebar?: (content: {
    id: string;
    title: string;
    isActive: boolean;
    type: string;
  }) => void;
}

const Pals: React.FC<PalsProps> = ({ props, onAddToSidebar }) => {
  const pals = props;
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => setIsActive(!isActive);
  const handleClick = () => {
    const uniqueId = `pals-${Date.now()}`;
    onAddToSidebar?.({
      id: uniqueId,
      title: pals,
      isActive: isActive,
      type: "Pals",
    });
  };

  return (
    <div className="control-panel">
      <div className="control">
        <label htmlFor="">{pals}</label>
        <div className="control-icon">
          <GiHomeGarage size="35px" />
        </div>
        <div className="control-actions">
          <button
            className={`on-call ${isActive ? "active" : ""}`}
            onClick={handleActive}
          >
            Çağır
          </button>
        </div>
        <button className="add-button" onClick={handleClick}>
          EKLE
        </button>
      </div>
    </div>
  );
};

export default Pals;
