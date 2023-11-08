import { useState } from "react";
import FILTER from "../assets/filter.png";
import SEARCH from "../assets/search.png";
import Table from "./Table";
import PopUp from "./PopUp";
import { useParams } from "react-router-dom";
import FormHeader from "./FormHeader";
import FilterBox from "./FilterBox";
import "../styling/formpage.css";

export default function FormPage() {
  const { userName, selectedFile } = useParams();

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  function handleOpenPopup() {
    setIsOpenPopup(true);
  }

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      setIsOpenPopup(false);
    }
  };

  const [activeFilter, setActiveFilter] = useState(true);
  const [inactiveFilter, setInactiveFilter] = useState(true);
  const [maleFilter, setMaleFilter] = useState(false);
  const [femaleFilter, setFemaleFilter] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  function handleOpenFilterBox() {
    setIsOpenFilter((prev) => !prev);
  }

  return (
    <div className="form-container">
      <FormHeader
        userName={userName}
        selectedFile={decodeURIComponent(selectedFile)}
        handleOpenPopup={handleOpenPopup}
      />
      <div className="filter-search-container">
        <button className="filter-btn" onClick={handleOpenFilterBox}>
          <img src={FILTER} alt="filter" />
          <span>filter</span>
        </button>
        <div>
          <span>
            <img src={SEARCH} alt="filter" />
          </span>
          <input type="text" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          gap: "40px",
          marginLeft: "30px",
        }}
      >
        <FilterBox
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          inactiveFilter={inactiveFilter}
          setInactiveFilter={setInactiveFilter}
          maleFilter={maleFilter}
          setMaleFilter={setMaleFilter}
          femaleFilter={femaleFilter}
          setFemaleFilter={setFemaleFilter}
          isOpenFilter={isOpenFilter}
        />
        <Table
          activeFilter={activeFilter}
          inactiveFilter={inactiveFilter}
          maleFilter={maleFilter}
          femaleFilter={femaleFilter}
        />
      </div>
      {isOpenPopup && (
        <div className="overlay" onClick={handleOverlayClick}>
          <PopUp
            userName={userName}
            selectedFile={selectedFile}
            setIsOpenPopup={setIsOpenPopup}
          />
        </div>
      )}
    </div>
  );
}
