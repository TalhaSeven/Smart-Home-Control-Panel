import { type } from "os";
import React, { useState } from "react";
import { CgSmartHomeBoiler } from "react-icons/cg";

interface BoilerProps {
  props: string;
  onAddToSidebar?: (content: {
    id: string;
    title: string;
    temperature: number;
    type: string;
  }) => void;
}

const Boiler: React.FC<BoilerProps> = ({ props, onAddToSidebar }) => {
  const [temperature, setTemperature] = useState(21.0);
  const boiler = props;
  const increaseTemperature = () =>
    setTemperature((prevTemp) => (prevTemp < 30 ? prevTemp + 0.5 : prevTemp));
  const decreaseTemperature = () =>
    setTemperature((prevTemp) => (prevTemp > 10 ? prevTemp - 0.5 : prevTemp));

  const handleClick = () => {
    const uniqueId = `boiler-${Date.now()}`;
    if (onAddToSidebar) {
      onAddToSidebar({ id: uniqueId, title: props, temperature: temperature, type: "Boiler" });
    }
  };

  return (
    <div className="control-panel">
      <div className="control">
        <label htmlFor="">{boiler}</label>
        <div className="control-icon">
          <CgSmartHomeBoiler size="35px" />
        </div>
        <div className="control-temperature">
          <button className="temp-minus" onClick={decreaseTemperature}>
            -
          </button>
          <div className="temp-display">{temperature.toFixed(1)}°C</div>
          <button className="temp-plus" onClick={increaseTemperature}>
            +
          </button>
        </div>
        <button className="add-button" onClick={handleClick}>
          EKLE
        </button>
      </div>
    </div>
  );
};

export default Boiler;
