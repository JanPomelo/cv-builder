import { useState } from "react";
import AddButton from "./AddButton";
import EducationForm from "./EducationForm";

export default function EducationDiv() {

  const [editEducation, setEditEducation] = useState(false);

  function handleAddClick() {
    setEditEducation(true);
  }

  function handleCancelClick() {
    setEditEducation(false);
  }

  return (
    <div className="groupDiv text-black flex flex-col gap-2">
      <div className="flex gap-2 items-center mb-2">
        <span id="educationSpan"></span>
        <h2 className="text-xl font-bold">Education</h2>
      </div>
      {editEducation ? (
        <EducationForm addOnClick={() => { }} errorMsg="" cancelOnClick={() => {handleCancelClick()}}/>
      ) :
        (
          <AddButton id="addEducationBut" onClick={handleAddClick} />
        )}
    </div>
  );
}
