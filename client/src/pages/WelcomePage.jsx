import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="main">
      <div className="main-heading">
        <h2 className="heading-2">Pick some new habits to get started</h2>
      </div>
      <Link to="/home">
        <button className="continue-button">Continue</button>
      </Link>
    </div>
  );
};

export default WelcomePage;
