import { MouseEventHandler } from "react";
import AddButton from "./AddButton";
import EducationForm from "./EducationForm";
import { education } from "../types";
import { format } from "date-fns";
import { adjustDateFormat } from "../dateFunctions";
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
    <div className="groupDiv text-black flex flex-col gap-2">
      <div className="flex gap-2 items-center mb-2">
        <span id="educationSpan"></span>
        <h2 className="text-xl font-bold">Education</h2>
      </div>
      {educations.map((education) => {
        const startDate = adjustDateFormat(education.startDate);
        let endDate = adjustDateFormat(education.endDate);
        const today = format(new Date(), "yyyy-MM-dd");
        if (today === education.endDate) {
          endDate = "now";
        }
        return (
          <div
            className="EducationExp flex justify-between w-full bg-my-bg rounded-lg px-2 py-0.5 mb-2"
            key={education.id}
            data-key={education.id}
          >
            <div className="flex flex-col text-white items-start">
              <h3>
                <b>
                  {education.degree} ({education.fos}) at {education.university}
                </b>
              </h3>
              <p>
                {startDate} - {endDate}
              </p>
            </div>
            <div className="flex flex-col justify-between">
              {edit ? <></> : <button className="editEntry" onClick={onEdit}></button>}

              <button className="deleteEntry" onClick={onDelete}></button>
            </div>
          </div>
        );
      })}
      {edit ? (
        <EducationForm onSave={onSave} errorMsg="" onCancel={onCancel} educationToEdit={educationToEdit} />
      ) : (
        <AddButton id="addEducationBut" onClick={onAdd} />
      )}
    </div>
  );
}