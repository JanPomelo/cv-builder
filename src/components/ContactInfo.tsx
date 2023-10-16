import { changeHandler } from "../types";
import GroupDivHeading from "./GroupDivHeading";
import InputDiv from "./inputDivs";

export default function ContactInfo({ onEmailChange, onPhoneChange }: {
  onEmailChange: changeHandler;
  onPhoneChange: changeHandler;
}) {
  return (
    <div className="groupDiv">
      <GroupDivHeading name="Contact Information" spanID="contactSpan" />
      <form>
        <InputDiv type="email" id="email" name="E-Mail" onChange={onEmailChange} />
        <InputDiv type="text" id="website" name="Website" onChange={() => {}} />
        <InputDiv type="text" id="phone" name="Phone Number" onChange={onPhoneChange}/>
        <InputDiv type="text" id="github" name="GitHub" />
        <InputDiv type="text" id="linkedin" name="LinkedIn" />
      </form>
    </div>
  );
}
