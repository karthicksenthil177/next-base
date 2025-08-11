import TabNav from "@/components/TabNav";

export default function TabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TabNav />
      {children}
    </div>
  );
}