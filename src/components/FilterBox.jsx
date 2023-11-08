import PropTypes from "prop-types";
import { useState } from "react";
import "../styling/filterbox.css";

export default function FilterBox({
  activeFilter,
  setActiveFilter,
  inactiveFilter,
  setInactiveFilter,
  maleFilter,
  setMaleFilter,
  femaleFilter,
  setFemaleFilter,
  isOpenFilter,
}) {
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [isOpenGender, setIsOpenGender] = useState(false);

  const handleActiveChange = () => {
    setActiveFilter(!activeFilter);
  };

  const handleInactiveChange = () => {
    setInactiveFilter(!inactiveFilter);
  };

  const handleMaleChange = () => {
    setMaleFilter(!maleFilter);
  };

  const handleFemaleChange = () => {
    setFemaleFilter(!femaleFilter);
  };

  function handleOpenStatus() {
    setIsOpenStatus((prev) => !prev);
  }

  function handleOpenGender() {
    setIsOpenGender((prev) => !prev);
  }

  return (
    <div className={`filter-cont ${!isOpenFilter ? "opacity" : ""}`}>
      <div className="status">
        <span onClick={handleOpenStatus}>&gt;</span>
        <p>სტუდენტის სტატუსი</p>
      </div>
      {isOpenStatus && (
        <>
          <div className="act-box">
            <input
              type="checkbox"
              checked={activeFilter}
              onChange={handleActiveChange}
            />
            <p> ACTIVE</p>
          </div>
          <div className="inact-box">
            <input
              type="checkbox"
              checked={inactiveFilter}
              onChange={handleInactiveChange}
            />
            <p> INACTIVE</p>
          </div>
        </>
      )}
      <div className="status">
        <span onClick={handleOpenGender}>&gt;</span>
        <p>სქესი</p>
      </div>
      {isOpenGender && (
        <>
          <div className="act-box">
            <input
              type="checkbox"
              checked={maleFilter}
              onChange={handleMaleChange}
            />
            <p> MALE</p>
          </div>
          <div className="inact-box">
            <input
              type="checkbox"
              checked={femaleFilter}
              onChange={handleFemaleChange}
            />
            <p> FEMALE</p>
          </div>
        </>
      )}
    </div>
  );
}

FilterBox.propTypes = {
  activeFilter: PropTypes.bool.isRequired,
  setActiveFilter: PropTypes.func.isRequired,
  inactiveFilter: PropTypes.bool.isRequired,
  setInactiveFilter: PropTypes.func.isRequired,
  maleFilter: PropTypes.bool.isRequired,
  setMaleFilter: PropTypes.func.isRequired,
  femaleFilter: PropTypes.bool.isRequired,
  setFemaleFilter: PropTypes.func.isRequired,
  isOpenFilter: PropTypes.bool.isRequired,
};
