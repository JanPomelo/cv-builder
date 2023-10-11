import { useState } from "react";
import EducationForm from "./components/Education";
import GeneralInfo from "./components/GeneralInformation";
import PracticalDiv from "./components/Practical";
import Preview from "./components/Preview";

function handleChanges(f: (s: string) => void, e: React.FormEvent<HTMLInputElement>): void {
  f(e.currentTarget.value);
}

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [profession, setProfession] = useState("");
  const [{ imageURL, imageName }, setImage] = useState({ imageURL: "", imageName: "" });

  const fullName: string = firstName + " " + lastName;

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      // ...
    } else {
      const imgURL: string = URL.createObjectURL(e.target.files[0]);
      const imgName: string = e.target.files[0].name;
      setImage({ imageURL: imgURL, imageName: imgName });
    }
  }
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex flex-col gap-4 flex-grow no-print">
        <GeneralInfo
          onFirstNameChange={(e) => handleChanges(setFirstName, e)}
          onLastNameChange={(e) => handleChanges(setLastName, e)}
          onLocationChange={(e) => handleChanges(setLocation, e)}
          onProfessionChange={(e) => handleChanges(setProfession, e)}
          onImageUpload={(e) => handleImageUpload(e)}
          image={{ imageURL, imageName }}
        />
        <PracticalDiv />
        <EducationForm />
      </div>
      <Preview name={fullName} location={location} profession={profession} image={{ imageURL, imageName }} />
    </div>
  );
}

export default App;
