import { ReactElement } from "react";

export default function InputDiv({ id, name }: { id: string, name: string }): ReactElement {
  return (
    <div className="flex justify-between items-center p-2">
      <label htmlFor={id}>{name + ': '}</label>
      <input type="text" id={id}></input>
    </div>
  );
}