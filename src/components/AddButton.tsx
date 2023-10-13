import { MouseEventHandler } from "react";

export default function AddButton({ id, onClick }: { id: string; onClick: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button className="flex items-center gap-1" id={id} onClick={onClick}>
      <span id="addButtonSpan"></span>Add
    </button>
  );
}
