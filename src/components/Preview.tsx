import { ReactElement } from "react";

function InfoResult(): ReactElement {
  return (
    <div className="h-1/5 flex justify-between">
      <div className="flex flex-col gap-2 items-start">
        <h2>Hallo</h2>
        <h3>Arbeiter</h3>
      </div>
    </div>
  );
}

export default function Preview() {
  return (
    <div id="preview" className="flex-grow bg-white relative text-black">
      <InfoResult></InfoResult>
      <hr className="h-1 bg-black"></hr>
    </div>
  );
}
