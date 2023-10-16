import { profExp } from "../types";
import { adjustDateFormat, turnToday2Now } from "../dateFunctions";
import { MouseEventHandler } from "react";

export default function PracticalExperiences({
  edit,
  jobs,
  onEdit,
  onDelete,
}: {
  edit: boolean;
  jobs: profExp[];
  onDelete: MouseEventHandler<HTMLButtonElement>;
  onEdit: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      {jobs.map((job) => {
        const startDate = adjustDateFormat(job.startDate);
        const endDate = turnToday2Now(job);
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
    </>
  );
}