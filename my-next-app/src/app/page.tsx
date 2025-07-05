import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Image
            className="dark:invert mb-8"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-4xl font-bold mb-4">Welcome to Next.js + shadcn/ui</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A modern stack with beautiful, accessible components
          </p>
        </div>

        {/* Components Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Button Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>Various button styles from shadcn/ui</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Default Button</Button>
              <Button variant="secondary" className="w-full">Secondary</Button>
              <Button variant="outline" className="w-full">Outline</Button>
              <Button variant="destructive" className="w-full">Destructive</Button>
            </CardContent>
          </Card>

          {/* Input Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Input</CardTitle>
              <CardDescription>Form input components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Enter your name" />
              <Input type="email" placeholder="Enter your email" />
              <Input type="password" placeholder="Enter your password" />
            </CardContent>
          </Card>

          {/* Card Example */}
          <Card>
            <CardHeader>
              <CardTitle>Card Component</CardTitle>
              <CardDescription>This is a card component showcase</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cards are perfect for displaying content in a structured way.
                They can contain headers, descriptions, and any content you need.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Getting Started */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Start building your application</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-inside list-decimal text-sm space-y-2">
              <li>
                Edit{" "}
                <code className="bg-muted px-1 py-0.5 rounded font-mono text-sm">
                  src/app/page.tsx
                </code>{" "}
                to start building your app
              </li>
              <li>Add more shadcn/ui components with <code className="bg-muted px-1 py-0.5 rounded font-mono text-sm">npx shadcn@latest add [component]</code></li>
              <li>Explore the <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">shadcn/ui documentation</a></li>
            </ol>
          </CardContent>
        </Card>

        {/* Footer Links */}
        <div className="flex gap-4 items-center justify-center flex-wrap">
          <Button variant="outline" asChild>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js Docs
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              shadcn/ui Docs
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy Now
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
