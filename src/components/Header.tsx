import { Dispatch, SetStateAction } from "react";
import "../styles/Header.css";
import { GiCancel } from "react-icons/gi";
import { MdOutlineSaveAlt } from "react-icons/md";

interface HeaderProps {
  setSortOrder: Dispatch<SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ setSortOrder }) => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortOrder(e.target.value);
  };
  const handleCancel = () => {};
  const handleSave = () => {};

  return (
    <div className="main-header">
      <header className="header">
        <input type="text" placeholder="Senaryo İsmi Giriniz" />
        <div className="icon-container">
          <button className="icon-button" onClick={handleCancel}>
            <GiCancel size="30px" />
            <div className="icon-label">İptal</div>
          </button>
          <button className="icon-button" onClick={handleSave}>
            <MdOutlineSaveAlt size="30px" />
            <div className="icon-label">Kaydet</div>
          </button>
        </div>
      </header>
      <div>
        <form>
          <div>
            <label htmlFor="option1">Hepsi</label>
            <input
              defaultChecked
              type="radio"
              id="option1"
              value="all"
              name="options"
              onChange={handleRadioChange}
            />
          </div>
          <div>
            <label htmlFor="option2">Alan</label>
            <input
              type="radio"
              id="option2"
              value="area"
              name="options"
              onChange={handleRadioChange}
            />
          </div>
          <div>
            <label htmlFor="option3">Tip</label>
            <input
              type="radio"
              id="option3"
              value="type"
              name="options"
              onChange={handleRadioChange}
            />
          </div>
          <div>
            <label htmlFor="option4">A-Z</label>
            <input
              type="radio"
              id="option4"
              value="az"
              name="options"
              onChange={handleRadioChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
