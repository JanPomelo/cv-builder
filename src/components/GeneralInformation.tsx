import InputDiv from "./inputDivs";
import { changeHandler } from "../types";
export default function GeneralInfo({
  onFirstNameChange,
  onLastNameChange,
  onLocationChange,
  onProfessionChange,
  onImageUpload,
}: {
  onFirstNameChange: changeHandler;
  onLastNameChange: changeHandler;
  onLocationChange: changeHandler;
  onProfessionChange: changeHandler;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <form className=" bg-blue-100 text-black">
      <h2>Personal Information</h2>
      <div className="flex gap-1">
        <InputDiv name="First Name" onChange={onFirstNameChange} type="text" />
        <InputDiv name="Last Name" onChange={onLastNameChange} type="text" />
      </div>
      <InputDiv name="Profession" type="text" onChange={onProfessionChange} />
      <InputDiv name="Location" type="text" onChange={onLocationChange} />
      <InputDiv name="Upload Photo" type="file" onChange={onImageUpload} />
    </form>
  );
}
