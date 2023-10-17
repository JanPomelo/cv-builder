import React, { useState } from "react";
import GroupDivHeading from "./GroupDivHeading";

export default function Options({
  onClick,
  onFontChange,
  onColorChange,
  onFontColorChange,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onFontChange: React.ChangeEventHandler<HTMLSelectElement>;
  onColorChange: React.ChangeEventHandler<HTMLInputElement>;
  onFontColorChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  const [fontColorFocus, setFontColorFocus] = useState(false);
  const [bgColorFocus, setBgColorFocus] = useState(false);

  return (
    <div className="groupDiv">
      <GroupDivHeading name="Customization" spanID="customizeSpan" />
      <div className="expandWrapper closed">
        <div className="innerExpandWrapper">
          <div className="optionsRow my-2">
            <p>Show black horizontal line </p>
            <button className="checked" id="blackLine" onClick={onClick} />
          </div>
          <div className="optionsRow my-4">
            <label htmlFor="font">Font</label>
            <select name="fonts" id="font" onChange={onFontChange}>
              <option value="Arial" defaultValue="selected">
                Arial
              </option>
              <option value="Courier New">Courier New</option>
              <option value="Garamond">Garamond</option>
              <option value="Tahoma">Tahoma</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
            </select>
          </div>
          <div className="optionsRow my-4">
            <label htmlFor="favcolor">Accent Background Color </label>
            <div
              className="colorDiv"
              style={bgColorFocus ? { border: "3px solid black" } : { border: "1px solid black" }}
            >
              <input
                type="color"
                id="favcolor"
                name="favcolor"
                defaultValue="#375356"
                onChange={onColorChange}
                onFocus={() => {
                  setBgColorFocus(true);
                }}
                onBlur={() => {
                  setBgColorFocus(false);
                }}
              ></input>
            </div>
          </div>
          <div className="optionsRow my-2">
            <label htmlFor="fontcolor">Accent Font Color </label>
            <div
              className="colorDiv"
              style={fontColorFocus ? { border: "3px solid black" } : { border: "1px solid black" }}
            >
              <input
                type="color"
                id="fontcolor"
                name="favcolor"
                defaultValue="#FFFFFF"
                onChange={onFontColorChange}
                onFocus={() => {
                  setFontColorFocus(true);
                }}
                onBlur={() => {
                  setFontColorFocus(false);
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
