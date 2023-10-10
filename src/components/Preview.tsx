import { ReactElement } from "react";

function InfoResult({name, description}: {name: string, description: string}): ReactElement {
  return (
    <div className="h-1/5 flex justify-between">
      <div className="flex flex-col gap-2 items-start">
        <h2 className="h-6">{name}</h2>
        <h3 className="h-5">{description}</h3>
      </div>
    </div>
  );
}

export default function Preview({name, description}: {name: string, description: string}) {
  return (
    <div id="preview" className="flex-grow bg-white relative text-black">
      <InfoResult name={name} description={description}></InfoResult>
      <hr className="h-1 bg-black"></hr>
    </div>
  );
}
