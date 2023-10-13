import AddButton from "./AddButton";

export default function EducationDiv() {
  return (
    <div className="groupDiv text-black flex flex-col gap-2">
      <div className="flex gap-2 items-center mb-2">
        <span id="educationSpan"></span>
        <h2 className="text-xl font-bold">Education</h2>
      </div>
      <AddButton id="addEducationBut" onClick={() => { }}/>
    </div>
  );
}
