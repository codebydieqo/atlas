import Sidebar from "@/components/sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full flex">
      <Sidebar />
      {children}
    </div>
  );
}
