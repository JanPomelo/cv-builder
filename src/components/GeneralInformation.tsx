import InputDiv from "./inputDiv"

export default function GeneralInfo() {
  return (
    <form className=" bg-blue-100 text-black">
      <h2>Personal Information: </h2>
      <InputDiv name='First Name' id='fName'></InputDiv>
      <InputDiv name='Last Name' id='lName'></InputDiv>
      <InputDiv name='Description' id='description'></InputDiv>
    </form>
  )
}