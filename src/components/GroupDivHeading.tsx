
export default function GroupDivHeading({ name, spanID }: {
  name: string, spanID: string
}) {
  return (
    <div className="flex gap-2 items-center mb-2">
      <span id={spanID}></span>
      <h2 className="text-xl font-bold">{name}</h2>
    </div>
  );
}