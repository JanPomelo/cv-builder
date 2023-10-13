import { MouseEventHandler } from "react";

export default function SaveAndCancel({ addOnClick, errorMsg, cancelOnClick, form }: {
  addOnClick: MouseEventHandler<HTMLButtonElement>;
  errorMsg: string;
  cancelOnClick: MouseEventHandler<HTMLButtonElement>;
  form: string;
}) {
  return (
  <div className="relative flex justify-between">
    <button className="ml-1" type="submit" form={form} onClick={addOnClick}>
      Save
    </button>
    <span className="errorSpan">{errorMsg}</span>
    <button className="mr-1 cancelAdd" type="reset" form={form} onClick={cancelOnClick}>
      Cancel
    </button>
    </div>
  )
}