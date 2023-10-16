import { MouseEventHandler } from "react";
import AddButton from "./AddButton";
import EducationForm from "./EducationForm";
import { education } from "../types";
import GroupDivHeading from "./GroupDivHeading";
import EducationExperiences from "./EducationExperiences";
export default function EducationDiv({
  educations,
  onAdd,
  onCancel,
  onDelete,
  onEdit,
  onSave,
  edit,
  educationToEdit,
}: {
  educations: education[];
  edit: boolean;
  onAdd: MouseEventHandler<HTMLButtonElement>;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  onDelete: MouseEventHandler<HTMLButtonElement>;
  onEdit: MouseEventHandler<HTMLButtonElement>;
  onSave: MouseEventHandler<HTMLButtonElement>;
  educationToEdit: education;
}) {
  return (
    <div className="groupDiv">
      <GroupDivHeading name="Education" spanID="educationSpan" />
      <EducationExperiences edit={edit} onEdit={onEdit} onDelete={onDelete} educations={educations} />
      {edit ? (
        <EducationForm onSave={onSave} errorMsg="" onCancel={onCancel} educationToEdit={educationToEdit} />
      ) : (
        <AddButton id="addEducationBut" onClick={onAdd} />
      )}
    </div>
  );
}
