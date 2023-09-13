import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import MainDrop from "./MainDrop/MainDrop";
import SkillDrop from "./SkillDrop/SkillDrop";

function App() {
  return (
    <div className="App">
      <Header />
      <MainDrop />
      <SkillDrop />
    </div>
  );
}

export default App;
