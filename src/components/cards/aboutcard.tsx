import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface AboutCardProps {
  expertType: 'designer' | 'developer' | 'researcher';
}

export default function AboutCard({ expertType }: AboutCardProps) {
  const descriptions = {
    designer: "Designer is a creative expert who helps bring visual concepts to life, ensuring that the design aligns with the brand's vision and user experience.",
    developer: "Developer is a technical expert who builds and maintains software applications, ensuring they are efficient, scalable, and robust.",
    researcher: "Researcher is an internal tool that helps you find information from our company's documents quickly and easily.",
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>{expertType.charAt(0).toUpperCase() + expertType.slice(1)}</CardTitle>
          <CardDescription>Last update: 7/11/2024 by</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground/90 leading-normal prose">
          <p className="mb-3">{descriptions[expertType]}</p>
        </CardContent>
      </Card>
    </div>
  )
}
