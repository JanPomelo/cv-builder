import { MouseEventHandler } from "react";
import { profExp } from "../types";
import PracticalForm from "./PracticalForm";
import AddButton from "./AddButton";
import { format } from "date-fns";


function adjustDateFormat(date: string): string {
  const year: string = date.substring(0, 4);
  const month: string = date.substring(5, 7);
  const newDate: string = month + "/" + year;
  return newDate;
}



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
    <div className="groupDiv text-black flex flex-col gap-2">
      <div className="flex gap-2 items-center mb-2">
        <span id="professionalSpan"></span>
        <h2 className="text-xl font-bold">Professional Experience</h2>
      </div>
      {jobs.map((job) => {
        const startDate = adjustDateFormat(job.startDate);
        let endDate = adjustDateFormat(job.endDate);
        const today = format(new Date(), "yyyy-MM-dd");
        if (today === job.endDate) {
          endDate = "now";
        }
        return (
          <div
            className="jobExp flex justify-between w-full bg-my-bg rounded-lg px-2 py-0.5 mb-2"
            key={job.id}
            data-key={job.id}
          >
            <div className="flex flex-col text-white items-start">
              <h3>
                <b>
                  {job.jobTitle} at {job.company}
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
        <PracticalForm addOnClick={onSave} cancelOnClick={onCancel} jobToEdit={jobToEdit} />
      ) : (
        <AddButton id="addPracitalBut" onClick={onAdd} />
      )}
    </div>
  );
}
