import { ReactElement } from "react";

function InfoResult({
  name,
  location,
  profession,
  image,
}: {
  name: string;
  location: string;
  profession: string;
  image: string;
}): ReactElement {
  return (
    <div className="h-1/6 flex justify-between">
      <div className="flex flex-col gap-2 items-start">
        <h2 className="h-6">{name}</h2>
        <h3 className="h-6">{profession}</h3>
        <h3 className="h-5">{location}</h3>
      </div>
      <img className="profilePic" src={image}></img>
    </div>
  );
}

export default function Preview({
  name,
  location,
  profession,
  image,
}: {
  name: string;
  location: string;
  profession: string;
  image: string;
}) {
  return (
    <div id="preview" className="flex-grow bg-white relative text-black text-xs">
      <InfoResult name={name} location={location} profession={profession} image={image} />
      <hr className="h-1 bg-black"></hr>
    </div>
  );
}
