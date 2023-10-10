import { useState } from "react";
import EducationForm from "./components/Education";
import GeneralInfo from "./components/GeneralInformation";
import PracticalForm from "./components/Practical";
import Preview from "./components/Preview";

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [description, setDescription] = useState('');

  const fullName: string = firstName + ' ' + lastName;
  function handleFirstNameChange(e: React.FormEvent<HTMLInputElement>) {
    setFirstName(e.currentTarget.value);
  }

  function handleLastNameChange(e: React.FormEvent<HTMLInputElement>) {
    setLastName(e.currentTarget.value);
  }

  function handleDescriptionChange(e: React.FormEvent<HTMLInputElement>) {
    setDescription(e.currentTarget.value);
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex flex-col gap-4 flex-grow">
        <GeneralInfo onFirstNameChange={(e) => handleFirstNameChange(e)} onLastNameChange={(e) => handleLastNameChange(e)} onDescriptionChange={(e) => {handleDescriptionChange(e)}} />
        <EducationForm />
        <PracticalForm />
      </div>
      <Preview name={fullName} description={description} />
    </div>
  );
}

export default App;
