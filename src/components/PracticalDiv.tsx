import { MouseEventHandler} from "react";
import { profExp } from "../types";
import PracticalForm from "./PracticalForm";
import AddButton from "./AddButton";


export default function PracticalDiv({jobs, onDelete, onSave, edit, onAdd, onCancel}: {jobs: profExp[], onDelete: MouseEventHandler<HTMLButtonElement>, onSave: MouseEventHandler<HTMLButtonElement>, edit: boolean, onAdd: MouseEventHandler<HTMLButtonElement>, onCancel: MouseEventHandler<HTMLButtonElement>}) {

  return (
    <div className="groupDiv text-black flex flex-col gap-2">
      <div className="flex gap-2 items-center mb-2">
        <span id="professionalSpan"></span>
        <h2 className="text-xl font-bold">Professional Experience</h2>
      </div>
      {jobs.map((job) => {
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
                {job.startDate} - {job.endDate}
              </p>
            </div>
            <button className="mb-auto deleteJob" onClick={onDelete}></button>
          </div>
        );
      })}
      {edit ? (
        <PracticalForm
          addOnClick={onSave}
          cancelOnClick={onCancel}
        />
      ) : (
        <AddButton
          id="addPracitalBut"
          onClick={onAdd}
        />
      )}
    </div>
  );
}
