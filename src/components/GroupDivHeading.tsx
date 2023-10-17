function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
  const img = e.target as HTMLImageElement;
  const button = img.parentElement as HTMLButtonElement;
  const contentDiv = button.parentElement?.nextSibling as HTMLDivElement;
  button.classList.toggle("expandButIn");
  button.classList.toggle("expandButOut");
  contentDiv.classList.toggle('closed');
  contentDiv.classList.toggle('expanded');
}

export default function GroupDivHeading({ name, spanID }: { name: string; spanID: string }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center mb-2">
        <span id={spanID}></span>
        <h2 className="text-xl text-left font-bold">{name}</h2>
      </div>
      <button className="expandButIn" onClick={handleOnClick}>
        <img src="../src/assets/arrow.svg" alt="arrow" />
      </button>
    </div>
  );
}
