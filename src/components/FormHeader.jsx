import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styling/formheader.css";

export default function FormHeader({
  userName,
  selectedFile,
  handleOpenPopup,
}) {
  return (
    <header className="header">
      <nav className="form-nav">
        <Link to="/" className="link">
          <h1>Form</h1>
        </Link>
        <Link to="/api" className="link">
          <h1>API</h1>
        </Link>
      </nav>
      <div className="info-box">
        <h1>{userName}</h1>
        {selectedFile && (
          <img src={selectedFile} alt="User" onClick={handleOpenPopup} />
        )}
      </div>
    </header>
  );
}

FormHeader.propTypes = {
  userName: PropTypes.string,
  selectedFile: PropTypes.string,
  handleOpenPopup: PropTypes.func,
};
