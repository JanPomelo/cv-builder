import { MouseEventHandler, useState } from "react";
import InputDiv from "./inputDivs";
import SaveAndCancel from "./SaveAndCancel";
import { profExp } from "../types";

export default function PracticalForm({
  addOnClick,
  cancelOnClick,
  jobToEdit,
}: {
  addOnClick: MouseEventHandler<HTMLButtonElement>;
  cancelOnClick: MouseEventHandler<HTMLButtonElement>;
  jobToEdit: profExp;
}) {
  const [errorMsg, setErrorMsg] = useState("");
  const minTextLength = 2;
  const companyErrMsg = `Company field needs to have at least ${minTextLength} characters.`;
  const jobTitleErrMsg = `Job title field needs to have at least ${minTextLength} characters.`;
  const locationErrMsg = `Location field needs to have at least ${minTextLength} characters.`;
  const dateErrMsg = `Date field needs to be filled with a proper date with the Datepicker`;
  const endDateBeforeStartDateErrMsg = `End date must be after the start date.`;

  function handleFocusAndChange(
    e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>,
    message: string
  ): void {
    if (!e.target.checkValidity()) {
      setErrorMsg(message);
    } else {
      setErrorMsg("");
    }
  }

  function handleDateChangeAndFocus(
    e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>,
    message: string
  ) {
    handleFocusAndChange(e, message);
    const form = document.getElementById("addProfExp") as HTMLFormElement;
    if (form.endDateJob.value >= form.startDateJob.value) {
      form.endDateJob.classList.remove("wrongsens");
    } else {
      form.endDateJob.classList.add("wrongsens");
    }
    if (e.target === form.endDateJob) {
      if (form.endDateJob.classList.contains("wrongsens")) {
        setErrorMsg(endDateBeforeStartDateErrMsg);
      } else {
        handleFocusAndChange(e, message);
      }
    }
  }

  return (
    <form
      onSubmit={(e) => {
        addOnClick;
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
        initValue={jobToEdit.company}
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
        initValue={jobToEdit.jobTitle}
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
        initValue={jobToEdit.startDate}
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
        initValue={jobToEdit.endDate}
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
        minLength={minTextLength}
        initValue={jobToEdit.location}
      />
      <InputDiv id="jobDescription" name="Description" type="textarea" initValue={jobToEdit.description} />
      <SaveAndCancel addOnClick={addOnClick} cancelOnClick={cancelOnClick} errorMsg={errorMsg} form="addProfExp" />
    </form>
  );
}
