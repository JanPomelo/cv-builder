import { MouseEventHandler } from "react";
import AddButton from "./AddButton";
import EducationForm from "./EducationForm";

export default function EducationDiv({
  onAdd,
  onCancel,
  edit,
}: {
  edit: boolean;
  onAdd: MouseEventHandler<HTMLButtonElement>;
  onCancel: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="groupDiv text-black flex flex-col gap-2">
      <div className="flex gap-2 items-center mb-2">
        <span id="educationSpan"></span>
        <h2 className="text-xl font-bold">Education</h2>
      </div>
      {edit ? (
        <EducationForm onSave={() => {}} errorMsg="" onCancel={onCancel} />
      ) : (
        <AddButton id="addEducationBut" onClick={onAdd} />
      )}
    </div>
  );
}
