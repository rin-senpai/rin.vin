import Link from "next/link"
import Image from 'next/image'

import { Apple, Github } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function IndexPage() {
  return (
    <div>
      <section className="container grid max-w-[980px] items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-row items-end justify-between gap-2">
          <div className="flex max-w-[980px] flex-col items-start gap-6">
            <div className="flex max-w-[980px] flex-col gap-2">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl">
                High Quality Software... Unfinished
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground">
                I&apos;m a developer... I think
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/seggs"
                className={buttonVariants({variant: "default"})}
              >
                My Stuff
              </Link>
              <Link
                href="/uoh"
                className={buttonVariants({variant: "outline"})}
              >
                About Me
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <Image
            className="rounded-full" 
              src="/rin.png"
              width={256}
              height={256}
              alt="Me IRL"
            />
          </div>
        </div>
      </section>
      <section className="container grid max-w-[980px] items-center gap-6 pb-8 pt-6 md:py-10">
        <h2 className="text-xl font-extrabold leading-tight tracking-tighter md:text-3xl">
          My Stuff
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Browoser</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                ok
              </p>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full">
                <Apple className="mr-2 h-4 w-4" /> App Store
              </Button>
              <Button className="w-full">
                <Github className="mr-2 h-4 w-4" /> Github
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Koharu</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                yep
              </p>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
            <Button className="w-full">
              <Github className="mr-2 h-4 w-4" /> Github
            </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>rin.vin</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                wait isn&apos;t that this???
              </p>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
            <Button className="w-full">
              <Github className="mr-2 h-4 w-4" /> Github
            </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}
