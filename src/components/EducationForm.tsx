import { MouseEventHandler } from "react";
import SaveAndCancel from "./SaveAndCancel";
import InputDiv from "./inputDivs";
import { education } from "../types";

export default function EducationForm({
  onSave,
  errorMsg,
  onCancel,
  educationToEdit
}: {
  onSave: MouseEventHandler<HTMLButtonElement>;
  errorMsg: string;
    onCancel: MouseEventHandler<HTMLButtonElement>;
    educationToEdit: education;
}) {
  return (
    <form id='addEducation'>
      <InputDiv id="degree" name="Degree" onChange={() => { }} type="text" onFocus={() => { }} minLength={2} initValue={educationToEdit.degree} />
      <InputDiv id="university" name="University / School" onChange={() => {}} type="text" onFocus={() => {}} minLength={2} initValue={educationToEdit.university}/>
      <InputDiv id="fos" name="Field of Study / Grade" onChange={() => { }} type="text" onFocus={() => { }} minLength={2} initValue={educationToEdit.fos} />
      <InputDiv id="startDateED" name="Start Date" onChange={() => {}} type="date" onFocus={() => {}} initValue={educationToEdit.startDate} />
      <InputDiv id="endDateED" name="End Date" onChange={() => {}} type="date" onFocus={() => {}} initValue={educationToEdit.endDate} />
      <InputDiv id="locationED" name="Location" onChange={() => {}} type="text" onFocus={() => {}} minLength={2} initValue={educationToEdit.location} />
      <SaveAndCancel addOnClick={onSave} errorMsg={errorMsg} cancelOnClick={onCancel} form="educationForm" />
    </form>
  );
}
