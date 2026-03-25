export default function PageHeader({ headerText }: { headerText: string }) {
  return (
    <div className="w-ful h-32 flex justify-between items-center px-5">
      <p className="text-5xl font-semibold">{headerText}</p>
    </div>
  );
}
