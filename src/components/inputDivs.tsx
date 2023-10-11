import { ReactElement } from "react";
import country from "country-list-js";
export default function InputDiv({
  name,
  onChange,
  type,
  image,
}: {
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  image?: { imageURL: string; imageName: string };
}): ReactElement {
  const countries: string[] = [];
  Object.keys(country.all).forEach((key) => {
    const land: { name: string } = country.all[key];
    countries.push(land.name);
  });
  if (type === "text") {
    return (
      <div className=" w-full flex justify-between items-center p-2">
        <input className="w-full mx-2" type={type} placeholder={name} onChange={onChange}></input>
      </div>
    );
  } else if (type === "select") {
    return (
      <div className=" w-full flex justify-between items-center p-2">
        <select className="w-full m-2">
          {countries.map((name) => {
            return <option value={name}>{name}</option>;
          })}
        </select>
      </div>
    );
  } else if (type === "file") {
    return (
      <div className=" w-full flex justify-start items-center p-2">
        <label htmlFor={name} className="w-full text-left bg-white mx-2">
          {image?.imageName === "" ? "Select Image" : image?.imageName}
        </label>
        <input hidden type={type} id={name} onChange={onChange}></input>
      </div>
    );
  } else {
    return <></>;
  }
}
