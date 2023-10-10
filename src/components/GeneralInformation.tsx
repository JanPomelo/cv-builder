import InputDiv from "./inputDiv"

type changeHandler = (e: React.FormEvent<HTMLInputElement>) => void;
export default function GeneralInfo({ onFirstNameChange, onLastNameChange, onDescriptionChange}: {onFirstNameChange: changeHandler, onLastNameChange: changeHandler, onDescriptionChange: changeHandler}) {
  return (
    <form className=" bg-blue-100 text-black">
      <h2>Personal Information</h2>
      <InputDiv name='First Name' id='fName' onChange = {onFirstNameChange}></InputDiv>
      <InputDiv name='Last Name' id='lName' onChange={onLastNameChange}></InputDiv>
      <InputDiv name='Description' id='description' onChange={onDescriptionChange}></InputDiv>
    </form>
  )
}