import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/registrationpage.css";

export default function RegistrationPage() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(
    () => localStorage.getItem("selectedPhoto") || null
  );
  const [userName, setUserName] = useState(
    () => localStorage.getItem("userName") || ""
  );
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("selectedPhoto", selectedFile);
  }, [selectedFile]);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result;
      setSelectedFile(base64Image);
    };
    reader.readAsDataURL(file);
  };

  const handleSignInClick = () => {
    if (selectedFile && userName) {
      navigate(`/contact/${userName}/${encodeURIComponent(selectedFile)}`);
    } else {
      alert("Please upload a photo and fill in your name.");
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSignInClick();
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-content">
        <h1>Get Started</h1>
        <p>Add Photo</p>
        <div
          className="upload-cont"
          onClick={() => fileInputRef.current.click()}
        >
          {selectedFile && <img src={selectedFile} alt="User's Uploaded" />}
        </div>
        <p>Fill in your name</p>
        <div className="input-box">
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyPress={handleEnterKeyPress}
          />
          <button onClick={handleSignInClick}>Sign In</button>
        </div>
        <input
          type="file"
          style={{ display: "none" }}
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
