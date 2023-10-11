function AddButton(
  {
    id
  }  : {
    id: string
  }
) {
  return (
    <button className="rounded-lg border px-2 py-0.5 bg-white flex items-center gap-1 mr-auto" id={id}><span id='addButtonSpan'></span>Add</button>
  )
}

export default function PracticalForm() {

  return (
    <div className="groupDiv text-black">
      <div className="flex gap-2 items-center mb-2">
        <span id="professionalSpan"></span>
        <h2 className="text-2xl font-bold">Professional Experience</h2>
      </div>
      <AddButton/>
    </div>
  );
}
