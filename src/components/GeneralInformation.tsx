import InputDiv from "./inputDivs";
import { changeHandler } from "../types";
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
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  image?: { imageURL: string; imageName: string };
}) {
  return (
    <form className="groupDiv text-black">
      <div className="flex gap-2 items-center justify-center">
        <span id="persoSpan"></span>
        <h2 className="text-2xl font-bold">Personal Information</h2>
      </div>
      <div className="flex">
        <InputDiv name="First Name" onChange={onFirstNameChange} type="text" />
        <InputDiv name="Last Name" onChange={onLastNameChange} type="text" />
      </div>
      <InputDiv name="Profession" type="text" onChange={onProfessionChange} />
      <InputDiv name="Location" type="text" onChange={onLocationChange} />
      <InputDiv name="Upload Photo" type="file" onChange={onImageUpload} image={image} />
    </form>
  );
}
