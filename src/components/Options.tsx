
import GroupDivHeading from "./GroupDivHeading";

export default function Options({ onClick }: {
  onClick: React.MouseEventHandler<HTMLButtonElement>}) {
  return (
    <div className="groupDiv closed">
      <GroupDivHeading name="Customization" spanID="customizeSpan" />
      <div className="flex gap-2 items-center">
        <button className='checked' id="blackLine" onClick={onClick}/>
        <p>Show black horizontal line</p>
      </div>
    </div>
  );
}
