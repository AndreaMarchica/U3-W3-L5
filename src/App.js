import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainContent from "./components/MainContent";
import MYSidebar from "./components/MySidebar";
import BottomNavbar from "./components/BottomNavbar";

function App() {
  return (
    <BrowserRouter>
      <MYSidebar></MYSidebar>
      <Routes>
        <Route path="/" element={<MainContent></MainContent>}></Route>
      </Routes>
      <BottomNavbar></BottomNavbar>
    </BrowserRouter>
  );
}

export default App;
