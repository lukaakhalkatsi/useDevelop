import LOGO from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <img src={LOGO} alt="Logo" />
        <h1>Get Started Today</h1>
        <Link to="/registration">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}
