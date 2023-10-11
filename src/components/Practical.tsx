import { MouseEventHandler, useState } from "react";
import InputDiv from "./inputDivs";

function AddButton({ id, onClick }: { id: string; onClick: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button
      className="flex items-center gap-1"
      id={id}
      onClick={onClick}
    >
      <span id="addButtonSpan"></span>Add
    </button>
  );
}

function PracticalForm({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <form action="none" className="flex flex-col justify-start">
      <InputDiv id="company" name="Company" type="text" />
      <InputDiv id="jobTitle" name="Job Title" type="text" />
      <InputDiv id="startDateJob" name="Start Date" type="date" />
      <InputDiv id="endDateJob" name="End Date" type="date" />
      <InputDiv id="location" name="Location" type="text" />
      <InputDiv id="jobDescription" name="Description" type="text" />
      <button className="ml-1" onClick={onClick}>
        Save
      </button>
    </form>
  );
}

export default function PracticalDiv() {
  const [edit, setEdit] = useState(false);
  const [exp, setExp] = useState([]);
  function handleAddClick() {
    setEdit(true);
  }

  function handleSaveClick() {
    setEdit(true);

    //setExp(exp.push())
  }

  return (
    <div className="groupDiv text-black">
      <div className="flex gap-2 items-center mb-2">
        <span id="professionalSpan"></span>
        <h2 className="text-xl font-bold">Professional Experience</h2>
      </div>
      {edit ? (
        <PracticalForm onClick={() => { handleSaveClick(); }} />
      ) : (
        <AddButton
          id="addPracitalBut"
          onClick={() => {
            handleAddClick();
          }}
        />
      )}
    </div>
  );
}
