import { ReactElement } from "react";
import country from "country-list-js";
export default function InputDiv({
  name,
  onChange,
  type,
}: {
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  }): ReactElement {
  const countries: string[] = [];
  Object.keys(country.all).forEach(key => {
    const land: {name: string} = country.all[key];
    countries.push(land.name);
  })
  if (type === "text") {
    return (
      <div className=" w-full flex justify-between items-center p-2">
        <input className="px-2 w-full mx-2" type={type} placeholder={name} onChange={onChange}></input>
      </div>
    );
  } else if (type === 'select') {
    return (
      <div className=" w-full flex justify-between items-center p-2">
        <select className="px-2 w-full m-2">
          {countries.map((name) => {
            return <option value={name}>{name}</option>;
          })}
        </select>
      </div>
    );
  } else if (type === 'file') {
    return (
      <div className=" w-full flex justify-start items-center p-2">
        <label htmlFor={name} className="px-2 w-full text-left bg-white mx-2" >
          Select Image
        </label>
        <input hidden type={type} id={name} onChange={onChange}></input>
      </div>
    );
  } else {
    return <></>
  }
}
