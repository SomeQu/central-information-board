import { Link, useNavigate } from "react-router-dom";
import "./MainPage.scss";
const MainPage = () => {
  const navigate = useNavigate();

  const goToBranches = () => {
    navigate("/branch");
  };
  return (
    <div className="main">
      <div className="main-hero">
        <h1>добро пожаловать!</h1>
      </div>
      <div className="logo">
        <img src="Rsk_main.png" alt="" />
        <h2>Информационное табло</h2>

        <button onClick={goToBranches}>Далее</button>
      </div>
    </div>
  );
};

export default MainPage;
