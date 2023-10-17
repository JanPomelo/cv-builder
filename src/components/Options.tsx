import React from "react";
import GroupDivHeading from "./GroupDivHeading";

export default function Options({
  onClick,
  onFontChange,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onFontChange: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <div className="groupDiv closed">
      <GroupDivHeading name="Customization" spanID="customizeSpan" />
      <div className="flex gap-2 items-center">
        <button className="checked" id="blackLine" onClick={onClick} />
        <p>Show black horizontal line</p>
      </div>
      <div className="flex gap-2 items-center">
        <label htmlFor="font">Font</label>
        <select name="fonts" id="font" onChange={onFontChange}>
          <option value="Arial" selected>
            Arial
          </option>
          <option value="Courier New">Courier New</option>
          <option value="Garamond">Garamond</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
      </div>
    </div>
  );
}
