import SampleExpert from "@/components/sampleExpert";

export default function HomePage() {
  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden pb-10 flex-col">
      <SampleExpert expertType="designer" />
    </div>
  );
}
