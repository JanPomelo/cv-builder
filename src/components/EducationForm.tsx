import { MouseEventHandler } from "react";
import SaveAndCancel from "./SaveAndCancel";

export default function EducationForm({
  addOnClick,
  errorMsg,
  cancelOnClick,
}: {
  addOnClick: MouseEventHandler<HTMLButtonElement>;
  errorMsg: string;
  cancelOnClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <form>
      <SaveAndCancel addOnClick={addOnClick} errorMsg={errorMsg} cancelOnClick={cancelOnClick} form='educationForm' />
    </form>
  );
}
