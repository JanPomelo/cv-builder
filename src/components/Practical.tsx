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
  const [errorMsg, setErrorMsg] = useState('');
  const minTextLength = 2;
  const companyErrMsg = `Company field needs to have at least ${minTextLength} characters.`
  const jobTitleErrMsg = `Job title field needs to have at least ${minTextLength} characters.`
  const locationErrMsg = `Location field needs to have at least ${minTextLength} characters.`
  const dateErrMsg = `Date field needs to be filled with a proper date with the Datepicker`;
  const endDateBeforeStartDateErrMsg = `End date must be after the start date.`;



  function handleFocusAndChange(e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>, message: string): void {
    if (!e.target.checkValidity()) {
      setErrorMsg(message);
    } else {
      setErrorMsg('');
    }
  }

  function handleDateChangeAndFocus(e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>, message: string) {
    handleFocusAndChange(e, message);
    const form = document.getElementById('addProfExp') as HTMLFormElement;
    if (form.endDateJob.value >= form.startDateJob.value) {
      form.endDateJob.classList.remove("wrongsens");
    } else {
      form.endDateJob.classList.add("wrongsens");
    }
    if (e.target === form.endDateJob) {
      if (form.endDateJob.classList.contains('wrongsens')) {
        setErrorMsg(endDateBeforeStartDateErrMsg);
      } else {
        handleFocusAndChange(e, message);
      }
    }
  }


  return (
    <form
      className="flex flex-col justify-start"
      onSubmit={(e) => {
        onClick;
        e.preventDefault();
      }}
      id="addProfExp"
    >
      <InputDiv
        id="company"
        name="Company"
        type="text"
        required={{ required: true }}
        onFocus={(e) => {
          handleFocusAndChange(e, companyErrMsg);
        }}
        onChange={(e) => {
          handleFocusAndChange(e as React.ChangeEvent<HTMLInputElement>, companyErrMsg);
        }}
        minLength={minTextLength}
      />
      <InputDiv
        id="jobTitle"
        name="Job Title"
        type="text"
        required={{ required: true }}
        onFocus={(e) => {
          handleFocusAndChange(e, jobTitleErrMsg);
        }}
        onChange={(e) => {
          handleFocusAndChange(e as React.ChangeEvent<HTMLInputElement>, jobTitleErrMsg);
        }}
        minLength={minTextLength}
      />
      <InputDiv
        id="startDateJob"
        name="Start Date"
        type="date"
        required={{ required: true }}
        onChange={(e) => {
          handleDateChangeAndFocus(e as React.ChangeEvent<HTMLInputElement>, dateErrMsg);
        }}
        onFocus={(e) => {
          handleDateChangeAndFocus(e, dateErrMsg);
        }}
      />
      <InputDiv
        id="endDateJob"
        name="End Date"
        type="date"
        required={{ required: true }}
        onChange={(e) => {
          handleDateChangeAndFocus(e as React.ChangeEvent<HTMLInputElement>, dateErrMsg);
        }}
        onFocus={(e) => {
          handleDateChangeAndFocus(e, dateErrMsg);
        }}
      />
      <InputDiv
        id="location"
        name="Location"
        type="text"
        required={{ required: true }}
        onFocus={(e) => {
          handleFocusAndChange(e, locationErrMsg);
        }}
        onChange={(e) => {
          handleFocusAndChange(e as React.ChangeEvent<HTMLInputElement>, locationErrMsg);
        }}
      />
      <InputDiv id="jobDescription" name="Description" type="textarea" />
      <div className="relative flex justify-start">
        <button className="ml-1" type="submit" form="addProfExp" onClick={onClick}>
          Save
        </button>
        <span id="expErrorSpan">{errorMsg}</span>
      </div>
    </form>
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
