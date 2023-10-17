import InputDiv from "./inputDivs";
import { changeHandler } from "../types";
import GroupDivHeading from "./GroupDivHeading";
export default function GeneralInfo({
  onFirstNameChange,
  onLastNameChange,
  onLocationChange,
  onProfessionChange,
  onImageUpload,
  image,
}: {
  onFirstNameChange: changeHandler;
  onLastNameChange: changeHandler;
  onLocationChange: changeHandler;
  onProfessionChange: changeHandler;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement> | void) => void;
  image?: { imageURL: string; imageName: string };
}) {
  return (
    <div className="groupDiv">
      <GroupDivHeading name="General Information" spanID="persoSpan" />
      <div className="expandWrapper closed">
        <form className="innerExpandWrapper">
          <div className="flex">
            <InputDiv name="First Name" onChange={onFirstNameChange} type="text" id="fName" />
            <InputDiv name="Last Name" onChange={onLastNameChange} type="text" id="lName" />
          </div>
          <InputDiv name="Profession" type="text" onChange={onProfessionChange} id="profession" />
          <InputDiv name="Location" type="text" onChange={onLocationChange} id="location" />
          <InputDiv name="Upload Photo" type="file" onChange={onImageUpload} image={image} id="photoUpload" />
        </form>
      </div>
    </div>
  );
}
