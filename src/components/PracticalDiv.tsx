import { FormEvent, MouseEventHandler, useState } from "react";
import { profExp } from "../types";
import PracticalForm from "./PracticalForm";
import { v4 as uuidv4 } from "uuid";
function AddButton({ id, onClick }: { id: string; onClick: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button className="flex items-center gap-1" id={id} onClick={onClick}>
      <span id="addButtonSpan"></span>Add
    </button>
  );
}

function checkValue(element: HTMLInputElement) {
  element.classList.add("required");
  if (element.value === "" || element.value === "mm/dd/yyyy") {
    return false;
  }
  return true;
}

function checkForm(form: HTMLFormElement) {
  const elements: HTMLInputElement[] = [form.company, form.jobTitle, form.location, form.startDateJob, form.endDateJob];
  let success: boolean = true;
  for (let i = 0; i < elements.length; i++) {
    if (!checkValue(elements[i])) {
      success = false;
    }
  }
  if (form.endDateJob.value < form.startDateJob.value) {
    form.endDateJob.classList.add("wrongsens");
    success = false;
  }
  return success;
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
      const startDate = adjustDateFormat(form.startDateJob.value);
      const endDate = adjustDateFormat(form.endDateJob.value);
      const newJob: profExp = {
        id: uuidv4(),
        company: form.company.value,
        jobTitle: form.jobTitle.value,
        description: form.jobDescription.value,
        startDate: startDate,
        endDate: endDate,
        location: form.location.value,
      };
      jobs.push(newJob);
      setJobs(jobs);
      setEdit(false);
    }
  }

  function handleCancelClick() {
    setEdit(false);
  }

  return (
    <div className="groupDiv text-black">
      <div className="flex gap-2 items-center mb-2">
        <span id="professionalSpan"></span>
        <h2 className="text-xl font-bold">Professional Experience</h2>
      </div>
      {jobs.map((job) => {
        return (
          <div className="flex flex-col text-white items-start bg-my-bg rounded-lg px-2 py-0.5 mb-2" key={job.id}>
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
          addOnClick={(e) => {
            handleSaveClick(e);
          }}
          cancelOnClick={() => {
            handleCancelClick();
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
