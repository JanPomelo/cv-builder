import { FormEvent, MouseEventHandler, useState } from "react";
import InputDiv from "./inputDivs";
import { profExp } from "../types";

function AddButton({ id, onClick }: { id: string; onClick: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button className="flex items-center gap-1" id={id} onClick={onClick}>
      <span id="addButtonSpan"></span>Add
    </button>
  );
}

function PracticalForm({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <form
      className="flex flex-col justify-start"
      onSubmit={(e) => {
        onClick;
        e.preventDefault();
      }}
      id="addProfExp"
    >
      <InputDiv id="company" name="Company" type="text" required={{ required: true }} />
      <InputDiv id="jobTitle" name="Job Title" type="text" required={{ required: true }} />
      <InputDiv id="startDateJob" name="Start Date" type="date" required={{ required: true }} />
      <InputDiv id="endDateJob" name="End Date" type="date" required={{ required: true }} />
      <InputDiv id="location" name="Location" type="text" required={{ required: true }} />
      <InputDiv id="jobDescription" name="Description" type="text" />
      <button className="ml-1" type="submit" form="addProfExp" onClick={onClick}>
        Save
      </button>
    </form>
  );
}

function checkValue(value: string) {
  if (value === "") {
    return false;
  }
  return true;
}
function checkForm(form: HTMLFormElement) {
  const values: string[] = [
    form.company.value,
    form.jobTitle.value,
    form.location.value,
    form.startDateJob.value,
    form.endDateJob.value,
  ];
  for (let i = 0; i < values.length; i++) {
    if (!checkValue(values[i])) {
      return false;
    }
  }
  return true;
}

function adjustDateFormat(date: string): string {
  const year: string = date.substring(0, 4);
  const month: string = date.substring(5, 7);
  const newDate: string = month + "/" + year;
  return newDate;
}

export default function PracticalDiv() {
  const [edit, setEdit] = useState(false);
  const [jobs, setJobs] = useState<profExp[]>([]);

  function handleAddClick() {
    setEdit(true);
  }

  function handleSaveClick(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const form = document.getElementById("addProfExp") as HTMLFormElement;
    if (checkForm(form)) {
      adjustDateFormat(form.startDateJob.value);
      const newJob: profExp = {
        company: form.company.value,
        jobTitle: form.jobTitle.value,
        description: form.jobDescription.value,
        startDate: adjustDateFormat(form.startDateJob.value),
        endDate: adjustDateFormat(form.endDateJob.value),
        location: form.location.value,
      };
      jobs.push(newJob);
      setJobs(jobs);
      setEdit(false);
    }
  }

  return (
    <div className="groupDiv text-black">
      <div className="flex gap-2 items-center mb-2">
        <span id="professionalSpan"></span>
        <h2 className="text-xl font-bold">Professional Experience</h2>
      </div>
      {jobs.map((job) => {
        return (
          <div className="flex flex-col text-white items-start bg-my-bg rounded-lg px-2 py-0.5 mb-2">
            <h3>
              <b>{job.jobTitle}</b> at {job.company}
            </h3>
            <p>
              {job.startDate} - {job.endDate}
            </p>
          </div>
        );
      })}
      {edit ? (
        <PracticalForm
          onClick={(e) => {
            handleSaveClick(e);
          }}
        />
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
