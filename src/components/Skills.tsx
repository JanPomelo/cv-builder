import { ChangeEventHandler } from "react";
import GroupDivHeading from "./GroupDivHeading";
import InputDiv from "./inputDivs";

export default function Skills({
  onTechnicalChange,
  onSoftChange,
  onLanguageChange,
}: {
  onTechnicalChange: ChangeEventHandler<HTMLTextAreaElement>;
  onSoftChange: ChangeEventHandler<HTMLTextAreaElement>;
  onLanguageChange: ChangeEventHandler<HTMLTextAreaElement>;
}) {
  return (
    <div className="groupDiv">
      <GroupDivHeading name="Skills" spanID="skillSpan" />
      <div className="expandWrapper closed">
        <form className="innerExpandWrapper">
          <InputDiv name="Technical Skills" id="technSkills" type="textarea" onTextAreaChange={onTechnicalChange} />
          <InputDiv name="Soft Skills" id="softSkills" type="textarea" onTextAreaChange={onSoftChange} />
          <InputDiv name="Language Skills" id="languageSkills" onTextAreaChange={onLanguageChange} type="textarea" />
        </form>
      </div>
    </div>
  );
}
