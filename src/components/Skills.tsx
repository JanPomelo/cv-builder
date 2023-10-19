import GroupDivHeading from "./GroupDivHeading";
import InputDiv from "./inputDivs";

export default function Skills() {
  return (
    <div className="groupDiv">
      <GroupDivHeading name="Skills" spanID="skillSpan" />
      <div className="expandWrapper closed">
        <form className="innerExpandWrapper">
          <InputDiv name="Technical Skills" id="technSkills" type="text" />
          <InputDiv name="Soft Skills" id="technSkills" type="text" />
          <InputDiv name="Language Skills" id="technSkills" type="text" />
        </form>
      </div>
    </div>
  );
}
