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
  image: { imageURL: string; imageName: string };
}): ReactElement {
  return (
    <div className="h-1/6 flex justify-between">
      <div className="flex flex-col items-start w-3/8 previewTitle">
        <div className="font-bold previewName">{name}</div>
        <div className="ml-3 font-bold previewOccupation">{profession}</div>
        <div className="flex items-center">
          <span id="locationSpan"></span>
          <h3 className="">{location}</h3>
        </div>
      </div>
      <img className="profilePic" src={image.imageURL}></img>
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
  image: { imageURL: string; imageName: string };
}) {
  return (
    <div id="preview" className="flex-grow bg-white relative text-black">
      <InfoResult name={name} location={location} profession={profession} image={image} />
      <hr className="h-1 bg-black"></hr>
    </div>
  );
}
