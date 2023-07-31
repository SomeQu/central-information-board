import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/main/MainPage";
import ClientMainPage from "../client/ClientMainPage";
import ChooseBranch from "../client/ChooseBranch";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/branch" element={<ChooseBranch />} />
      <Route path="client" element={<ClientMainPage />} />
    </Routes>
  );
};

export default MainRoute;
