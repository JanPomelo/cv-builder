import InputDiv from "./inputDivs";

export default function ContactInfo() {
  return (
    <div className="groupDiv">
      <InputDiv type="email" id="email" name="E-Mail" onChange={() => { }} />
      <InputDiv type="text" id="website" name="Website" onChange={() => { }} />
      <InputDiv type='text' id="phone" name='Phone Number' />
      <InputDiv type="text" id="github" name="GitHub" />
      <InputDiv type="text" id="linkedin" name="LinkedIn" />
    </div>
  )
}