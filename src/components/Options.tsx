import React, { useState } from "react";
import GroupDivHeading from "./GroupDivHeading";

export default function Options({
  onClick,
  onFontChange,
  onColorChange,
  onFontColorChange,
  onThemeChange,
  onFontSizeChange,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onFontChange: React.ChangeEventHandler<HTMLSelectElement>;
  onColorChange: React.ChangeEventHandler<HTMLInputElement>;
  onFontColorChange: React.ChangeEventHandler<HTMLInputElement>;
  onThemeChange: React.ChangeEventHandler<HTMLSelectElement>;
  onFontSizeChange: React.ChangeEventHandler<HTMLSelectElement>;
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
            <label htmlFor="fontSize">Font Size</label>
            <select name="fontSize" id="fontSize" onChange={onFontSizeChange}>
              <option value="tenPTfontSize">10pt</option>
              <option value="elevenPTfontSize">11pt</option>
              <option value="" defaultValue="selected" selected>
                12pt
              </option>
              <option value="thirteenPTfontSize">13pt</option>
              <option value="fourteenPTfontSize">14pt</option>
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
          <div className="optionsRow my-4">
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
          <div className="optionsRow my-2">
            <label htmlFor="theme">Website Theme</label>
            <select name="theme" id="theme" onChange={onThemeChange}>
              <option value="" defaultValue="selected">
                Black & Grey (Standard)
              </option>
              <option value="blackAndGold">Black & Gold</option>
              <option value="blueAndWhite">Blue & White</option>
              <option value="greenTones">Green Tones</option>
              <option value="halloween">Halloween</option>
              <option value="graphiteRed">Red Graphite</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
