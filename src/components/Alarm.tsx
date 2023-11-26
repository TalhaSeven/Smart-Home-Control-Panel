import React, { useState } from "react";
import { RiAlarmWarningFill } from "react-icons/ri";

interface AlarmProps {
  props: string;
  onAddToSidebar?: (content: { id: string; title: string; status: string; type:string }) => void;
}

const Alarm: React.FC<AlarmProps> = ({ props, onAddToSidebar }) => {
  const alarm = props;
  const [selectRadio, setSelectRadio] = useState(alarm);
  const handleClick = () => {
    const uniqueId = `alarm-${Date.now()}`;
    if (onAddToSidebar) {
      onAddToSidebar({ id: uniqueId, title: alarm, status: selectRadio, type: "Alarm" });
    }
  };
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectRadio(e.target.value);
  };

  return (
    <div className="control-panel">
      <div className="control">
        <label htmlFor="">{alarm}</label>
        <div className="control-icon">
          <RiAlarmWarningFill size="35px" />
        </div>
        <div className="control-actions">
          <input
            className="radio"
            type="radio"
            id={`in${alarm}`}
            name={`controlAlarm${alarm}`}
            value={`in${alarm}`}
            defaultChecked
            onChange={handleRadioChange}
          />
          <label htmlFor={`in${alarm}`}>Ev</label>
          <input
            className="radio"
            type="radio"
            id={`out${alarm}`}
            name={`controlAlarm${alarm}`}
            value={`out${alarm}`}
            onChange={handleRadioChange}
          />
          <label htmlFor={`out${alarm}`}>Dış</label>
        </div>
        <button className="add-button" onClick={handleClick}>
          EKLE
        </button>
      </div>
    </div>
  );
};

export default Alarm;
