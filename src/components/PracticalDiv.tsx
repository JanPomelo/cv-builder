import { MouseEventHandler } from "react";
import { profExp } from "../types";
import PracticalForm from "./PracticalForm";
import AddButton from "./AddButton";
import GroupDivHeading from "./GroupDivHeading";
import PracticalExperiences from "./PracticalExperiences";



export default function PracticalDiv({
  jobs,
  onDelete,
  onSave,
  edit,
  onAdd,
  onCancel,
  onEdit,
  jobToEdit,
}: {
  jobs: profExp[];
  onDelete: MouseEventHandler<HTMLButtonElement>;
  onSave: MouseEventHandler<HTMLButtonElement>;
  edit: boolean;
  onAdd: MouseEventHandler<HTMLButtonElement>;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  onEdit: MouseEventHandler<HTMLButtonElement>;
  jobToEdit: profExp;
}) {
  return (
    <div className="groupDiv">
      <GroupDivHeading name='Professional Experience' spanID="professionalSpan" />
      <PracticalExperiences edit={edit} onEdit={onEdit} onDelete={onDelete} jobs={jobs} />
      {edit ? (
        <PracticalForm addOnClick={onSave} cancelOnClick={onCancel} jobToEdit={jobToEdit} />
      ) : (
        <AddButton id="addPracitalBut" onClick={onAdd} />
      )}
    </div>
  );
}
