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
          <CardTitle>Money Maker</CardTitle>
          <CardDescription>The future of worklfows</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground/90 leading-normal prose">
          <p className="mb-3"> Unlock Your Business Potential with Expert Agents

At Money Maker, we are dedicated to helping you streamline your operations and enhance your workflow with the power of expert agents. Whether you are looking to optimize your financial strategies, elevate your marketing efforts, or improve customer engagement, our team is here to propel your business to new heights. </p>
          {/* <p className="mb-3">Built with Next.js, AI SDK, Tailwind, Typescript and shadcn you can build a bare minimum AI Chatbot with only an environment variable. Based off the popular <Link href="https://chat.vercel.ai/">Next AI Chatbot</Link> the aim for this project is to remove any dependency outside of basic functionality and examples with an emphasis on making changes and experimenting with the AI SDK. </p>
          <p className="mb-3 font-semibold">Big Opinions:</p>
          <ul className="flex flex-col mb-2">
            <li>→ Speed to learning and experimenting AI SDK</li>
            <li>→ App Router, Server Actions, React Server Components</li>
            <li>→ No auth, storage or sharing</li>
            <li></li>
          </ul>
          <p><Link href="https://github.com/mattjared/nextjs-ai-lite" className="underline">Fork the repo and get hacking</Link> </p> */}
        </CardContent>
      </Card>
    </div>
  )
}
