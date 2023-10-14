import { MouseEventHandler } from "react";
import SaveAndCancel from "./SaveAndCancel";
import InputDiv from "./inputDivs";

export default function EducationForm({
  onSave,
  errorMsg,
  onCancel,
}: {
  onSave: MouseEventHandler<HTMLButtonElement>;
  errorMsg: string;
  onCancel: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <form>
      <InputDiv id="degree" name="Degree" onChange={() => {}} type="text" onFocus={() => {}} minLength={2} />
      <InputDiv id="school" name="University / School" onChange={() => {}} type="text" onFocus={() => {}} minLength={2} />
      <InputDiv id="fos" name="Field of Study / Grade" onChange={() => {}} type="text" onFocus={() => {}} minLength={2} />
      <InputDiv id="startDateED" name="Start Date" onChange={() => {}} type="date" onFocus={() => {}} />
      <InputDiv id="endDateED" name="End Date" onChange={() => {}} type="date" onFocus={() => {}} />
      <InputDiv id="locationED" name="Location" onChange={() => {}} type="text" onFocus={() => {}} minLength={2} />
      <SaveAndCancel addOnClick={onSave} errorMsg={errorMsg} cancelOnClick={onCancel} form="educationForm" />
    </form>
  );
}
