import { education } from "../types";
import { adjustDateFormat, turnToday2Now } from "../dateFunctions";
import { MouseEventHandler } from "react";

export default function EducationExperiences({
  educations,
  edit,
  onEdit,
  onDelete,
}: {
  educations: education[];
  edit: boolean;
  onDelete: MouseEventHandler<HTMLButtonElement>;
  onEdit: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      {educations.map((education) => {
        const startDate = adjustDateFormat(education.startDate);   
        const endDate = turnToday2Now(education);
        
        return (
          <div
            className="educationExp flex justify-between w-full bg-my-bg rounded-lg px-2 py-0.5 mb-2"
            key={education.id}
            data-key={education.id}
          >
            <div className="flex flex-col text-white items-start">
              <h3>
                <b>
                  {education.degree} ({education.fos})
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
    </>
  );
}
