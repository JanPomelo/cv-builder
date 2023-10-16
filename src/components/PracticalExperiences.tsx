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
          <div className="experience" key={job.id} data-key={job.id}>
            <div className="expData">
              <h3>
                <b>
                  {job.jobTitle} at {job.company}
                </b>
              </h3>
              <p>
                {startDate} - {endDate}
              </p>
            </div>
            <div className="expButtons">
              {edit ? <></> : <button className="editEntry" onClick={onEdit}></button>}
              <button className="deleteEntry" onClick={onDelete}></button>
            </div>
          </div>
        );
      })}
    </>
  );
}
