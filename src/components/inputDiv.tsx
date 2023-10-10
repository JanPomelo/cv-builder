import { ReactElement } from "react";

export default function InputDiv({ id, name, onChange }: { id: string, name: string, onChange?: (e: React.FormEvent<HTMLInputElement>) => void }): ReactElement {
  return (
    <div className="flex justify-between items-center p-2">
      <label htmlFor={id}>{name + ': '}</label>
      <input type="text" id={id} onChange={onChange}></input>
    </div>
  );
}