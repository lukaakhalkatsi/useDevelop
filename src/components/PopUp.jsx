import PropTypes from "prop-types";
import "../styling/popup.css";

export default function PopUp({ userName, selectedFile, setIsOpenPopup }) {
  const handleSignOutClick = () => {
    // Clear localStorage
    localStorage.clear();

    // Navigate to the LandingPage
    setIsOpenPopup(false); // Close the popup
    window.location.href = "/"; // This will navigate to the LandingPage
  };

  return (
    <div className="popup-container">
      <div className="content-container">
        <p className="username">my name is {userName}</p>
        <img src={selectedFile} />
        <p className="quote">
          React developers bring user interfaces to life, turning complex
          problems into elegant solutions, one component at a time.
        </p>
        <button className="signout-btn" onClick={handleSignOutClick}>
          Sign Out
        </button>
      </div>
      <button className="close-btn" onClick={() => setIsOpenPopup(false)}>
        X
      </button>
    </div>
  );
}

PopUp.propTypes = {
  userName: PropTypes.string,
  selectedFile: PropTypes.string,
  setIsOpenPopup: PropTypes.func.isRequired,
};
