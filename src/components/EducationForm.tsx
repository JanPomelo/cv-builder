import { MouseEventHandler, useState } from "react";
import SaveAndCancel from "./SaveAndCancel";
import InputDiv from "./inputDivs";
import { education } from "../types";

export default function EducationForm({
  onSave,
  onCancel,
  educationToEdit,
}: {
  onSave: MouseEventHandler<HTMLButtonElement>;
  errorMsg: string;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  educationToEdit: education;
}) {
  const [errorMsg, setErrorMsg] = useState("");

  const minTextLength = 2;
  const degreeErrMsg = `Degree field needs to have at least ${minTextLength} characters.`;
  const universityErrMsg = `University field needs to have at least ${minTextLength} characters.`;
  const locationErrMsg = `Location field needs to have at least ${minTextLength} characters.`;
  const dateErrMsg = `Date field needs to be filled with a proper date with the Datepicker`;
  const endDateBeforeStartDateErrMsg = `End date must be after the start date.`;
  const fosErrMsg = `Field of study field needs to have at least ${minTextLength} characters.`;

  function handleFocusAndChange(
    e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement> | undefined,
    message: string
  ): void {
    if (e) {
      if (!e.target.checkValidity()) {
        setErrorMsg(message);
      } else {
        setErrorMsg("");
      }
    }
  }

  function handleDateChangeAndFocus(
    e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement> | undefined,
    message: string
  ) {
    handleFocusAndChange(e, message);
    const form = document.getElementById("addEducation") as HTMLFormElement;
    if (form.endDateED.value >= form.startDateED.value) {
      form.endDateED.classList.remove("wrongsens");
    } else {
      form.endDateED.classList.add("wrongsens");
    }
    if (e!.target === form.endDateED) {
      if (form.endDateED.classList.contains("wrongsens")) {
        setErrorMsg(endDateBeforeStartDateErrMsg);
      } else {
        handleFocusAndChange(e, message);
      }
    }
  }

  return (
    <form id="addEducation">
      <InputDiv
        required={{ required: true }}
        id="degree"
        name="Degree"
        onChange={(e) => {
          handleFocusAndChange(e, degreeErrMsg);
        }}
        type="text"
        onFocus={(e) => {
          handleFocusAndChange(e, degreeErrMsg);
        }}
        minLength={2}
        initValue={educationToEdit.degree}
      />
      <InputDiv
        required={{ required: true }}
        id="university"
        name="University / School"
        onChange={(e) => {
          handleFocusAndChange(e, universityErrMsg);
        }}
        type="text"
        onFocus={(e) => {
          handleFocusAndChange(e, universityErrMsg);
        }}
        minLength={2}
        initValue={educationToEdit.university}
      />
      <InputDiv
        required={{ required: true }}
        id="fos"
        name="Field of Study / Grade"
        onChange={(e) => {
          handleFocusAndChange(e, fosErrMsg);
        }}
        type="text"
        onFocus={(e) => {
          handleFocusAndChange(e, fosErrMsg);
        }}
        minLength={2}
        initValue={educationToEdit.fos}
      />
      <InputDiv
        required={{ required: true }}
        id="startDateED"
        name="Start Date"
        onChange={(e) => {
          handleDateChangeAndFocus(e as React.ChangeEvent<HTMLInputElement>, dateErrMsg);
        }}
        type="date"
        onFocus={(e) => {
          handleDateChangeAndFocus(e, dateErrMsg);
        }}
        minLength={minTextLength}
        initValue={educationToEdit.startDate}
      />
      <InputDiv
        required={{ required: true }}
        id="endDateED"
        name="End Date"
        onChange={(e) => {
          handleDateChangeAndFocus(e as React.ChangeEvent<HTMLInputElement>, dateErrMsg);
        }}
        type="date"
        onFocus={(e) => {
          handleDateChangeAndFocus(e, dateErrMsg);
        }}
        initValue={educationToEdit.endDate}
      />
      <InputDiv
        required={{ required: true }}
        id="locationED"
        name="Location"
        onChange={(e) => {
          handleFocusAndChange(e, locationErrMsg);
        }}
        type="text"
        onFocus={(e) => {
          handleFocusAndChange(e, locationErrMsg);
        }}
        minLength={2}
        initValue={educationToEdit.location}
      />
      <SaveAndCancel addOnClick={onSave} errorMsg={errorMsg} cancelOnClick={onCancel} form="educationForm" />
    </form>
  );
}
