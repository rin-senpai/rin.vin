"use client"

import Link from "next/link"
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

import { Gift, Apple, Github, Globe } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export default function IndexPage() {
  const { toast } = useToast()
  const searchParams = useSearchParams()
  
  if(searchParams.get("grabbed") === '1') {
    toast({
      title: "I got your ip lmao gotem!! get a vpn scrub",
      description: "(for legal reasons this is a joke I forgor the tracker link)"
    })
  }
  
  return (
    <div>
      <section className="container grid max-w-[980px] items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-center gap-8 md:flex-row md:items-end md:gap-2">
          <div className="flex max-w-[980px] flex-col items-center md:items-start gap-6">
            <div className="flex max-w-[980px] flex-col gap-2">
              <h1 className="text-center md:text-left text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl">
                High Quality Software... Unfinished
              </h1>
              <p className="text-center md:text-left max-w-[700px] text-lg text-muted-foreground">
                I&apos;m a developer... I think... I hope...
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://ko-fi.com/voxeldev"
                className={buttonVariants({variant: "default"})}
              >
                <Gift className="mr-2 h-4 w-4" /> Invest
              </Link>
              <Link
                href="https://grabify.link/SEHP7N" // tracked at https://grabify.link/track/FI1N1L
                className={buttonVariants({variant: "outline"})}
              >
                Your IP
              </Link>
            </div>
          </div>
          <div className="flex gap-4 order-first md:order-last">
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
        <h2 className="text-center md:text-left text-xl font-extrabold leading-tight tracking-tighter md:text-3xl">
          My Stuff
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="flex flex-col justify-between">
            <div>
              <CardHeader>
                <CardTitle>Browoser</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Image
                  className="rounded-2xl" 
                  src="/browoser.png"
                  width={256}
                  height={256}
                  alt="Browoser chan"
                />
                <p>
                  Funni browser app for Apple Watch built in Swift UI. AI soon!!
                </p>
              </CardContent>
            </div>
            <CardFooter className="flex flex-col gap-2">
              <Link href="https://apps.apple.com/us/app/browoser/id6463472872" className={buttonVariants({ variant: "full" })}>
                <Apple className="mr-2 h-4 w-4" /> App Store
              </Link>
              <Link href="https://github.com/rin-senpai/browoser" className={buttonVariants({ variant: "full" })}>
                <Github className="mr-2 h-4 w-4" /> Github
              </Link>
            </CardFooter>
          </Card>
          <Card className="flex flex-col justify-between">
            <div>
              <CardHeader>
                <CardTitle>Koharu</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Image
                  className="rounded-2xl" 
                  src="/koharu.png"
                  width={256}
                  height={256}
                  alt="Koharu chan"
                />
                <p>
                  Peak girlfriend I mean Discord bot. Built in discord.py, she has really cool features I think probably also stickers yep so I love her.
                </p>
              </CardContent>
            </div>
            <CardFooter className="flex flex-col gap-2">
            <Link href="https://github.com/rin-senpai/koharu" className={buttonVariants({ variant: "full" })}>
              <Github className="mr-2 h-4 w-4" /> Github
            </Link>
            </CardFooter>
          </Card>
          <Card className="flex flex-col justify-between">
            <div>
            <CardHeader>
              <CardTitle>rin.vin</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Image
                    className="rounded-2xl" 
                    src="/rin.vin.png"
                    width={256}
                    height={256}
                    alt="rin.vin chan"
                  />
                <p>
                  wait isn&apos;t that this???
                </p>
            </CardContent>
            </div>
            <CardFooter className="flex flex-col gap-2">
              <Link href="/" className={buttonVariants({ variant: "full" })}>
                <Globe className="mr-2 h-4 w-4" /> Website
              </Link>
              <Link href="https://github.com/rin-senpai/rin.vin" className={buttonVariants({ variant: "full" })}>
                <Github className="mr-2 h-4 w-4" /> Github
              </Link>
              </CardFooter>
          </Card>
        </div>
      </section>
      <section className="container grid max-w-[980px] items-center gap-6 pb-8 pt-6 md:py-10">
        <h2 className="text-center md:text-left text-xl font-extrabold leading-tight tracking-tighter md:text-3xl">
          So Where Find Me????
        </h2>
        <p>
          your walls
        </p>
      </section>
    </div>
  )
}
