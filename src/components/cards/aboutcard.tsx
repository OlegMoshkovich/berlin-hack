import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function AboutCard() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Researcher</CardTitle>
          <CardDescription>Last update: 7/11/2024 by</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground/90 leading-normal prose">
          <p className="mb-3"> Researcher is an internal tool that helps you find information from our company&apos;s documents quickly and easily. It&apos;s a personal assistant that can answer your questions by searching through our manuals, products, policies, and other resources we use within the company. When you ask a question, the Researcher provides an accurate answer and tells you exactly where the information came from, such as the document title and page number.</p>
        </CardContent>
      </Card>
    </div>
  )
}
