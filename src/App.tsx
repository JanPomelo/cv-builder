import "./App.css";
import EducationForm from "./components/Education";
import GeneralInfo from "./components/GeneralInformation";
import PracticalForm from "./components/Practical";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex flex-col gap-4 flex-grow">
        <GeneralInfo />
        <EducationForm />
        <PracticalForm />
      </div>
      <Preview />
    </div>
  );
}

export default App;
