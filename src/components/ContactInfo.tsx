import { changeHandler } from "../types";
import GroupDivHeading from "./GroupDivHeading";
import InputDiv from "./inputDivs";

export default function ContactInfo({
  onEmailChange,
  onPhoneChange,
  onWebsiteChange,
  onGitHubChange,
  onLinkedInChange,
}: {
  onEmailChange: changeHandler;
  onPhoneChange: changeHandler;
  onWebsiteChange: changeHandler;
  onGitHubChange: changeHandler;
  onLinkedInChange: changeHandler;
}) {
  return (
    <div className="groupDiv">
      <GroupDivHeading name="Contact Information" spanID="contactSpan" />
      <div className="expandWrapper closed">
        <form className="innerExpandWrapper">
          <InputDiv type="email" id="email" name="E-Mail" onChange={onEmailChange} />
          <InputDiv type="text" id="website" name="Website" onChange={onWebsiteChange} />
          <InputDiv type="text" id="phone" name="Phone Number" onChange={onPhoneChange} />
          <InputDiv type="text" id="github" name="GitHub" onChange={onGitHubChange} />
          <InputDiv type="text" id="linkedin" name="LinkedIn" onChange={onLinkedInChange} />
        </form>
      </div>
    </div>
  );
}
