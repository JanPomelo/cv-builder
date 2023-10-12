import { ReactElement } from "react";
export default function InputDiv({
  id,
  name,
  onChange,
  type,
  image,
  required
}: {
  id: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
    image?: { imageURL: string; imageName: string };
    required?: {required: boolean}
  }): ReactElement {
  if (type === "text") {
    return (
      <div className=" w-full flex justify-between items-center py-2">
        <label htmlFor={id} hidden>
          {name}
        </label>
        <input id={id} className="w-full mx-1" type={type} placeholder={name} onChange={onChange} {...required} ></input>
      </div>
    );
  } else if (type === "date") {
    return (
      <div className="w-full flex py-2">
        <label htmlFor={id}>{name}</label>
        <input id={id} pattern="\d{1,2}[\/.-]\d{1,2}[\/.-]\d{4}" type={type} {...required} className="mr-1 flex-grow" />
      </div>
    );
  
  } else if (type === "file") {
    return (
      <div className=" w-full flex justify-between items-center py-2">
        <label htmlFor={name} className="w-full text-left bg-white mx-1">
          {image?.imageName === "" ? "Select Image" : image?.imageName}
        </label>
        <input hidden type={type} id={name} onChange={onChange}></input>
      </div>
    );
  } else {
    return <></>;
  }
}
