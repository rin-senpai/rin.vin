"use client"

import Link from "next/link"
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

import { Gift, Apple, Github, Globe, Gamepad2 } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export default function IndexPage() {
  const router = useRouter()

  const { toast } = useToast()
  const searchParams = useSearchParams()

  useEffect(() => {
    if(searchParams.get('grabbed') === '1') {
      setTimeout(() => {
        toast({
          title: "I got your ip lmao gotem!! get a vpn scrub",
          description: "(for legal reasons this is a joke I forgor the tracker link)"
        })
      }, 100)
      router.push('/')
    }

  }, [searchParams, toast, router])

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
                href="https://ko-fi.com/riniverse"
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
        <h2 className="text-center md:text-left text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
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
                  Funni browser app for Apple Watch built in SwiftUI. AI too now!!
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
              <div className="frameWrap">
                <iframe className="frame" src="https://rin.vin" title="Recursion" width={256} height={256}></iframe>
              </div>
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
      <section className="container grid max-w-[980px] items-center gap-4 pb-8 pt-6 md:py-10">
        <h2 className="text-center md:text-left text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
          Roles and Positions
        </h2>
        <Card className="flex flex-col gap-2">
          <CardHeader>
            <CardTitle>AUNSW IT Subcom</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I&apos;m the sole member of the Anime UNSW IT Subcommittee and code various solutions for the club. On track for director next year surely?
            </p>
          </CardContent>
          <CardFooter>
            <p>2024 - Present</p>
          </CardFooter>
        </Card>
        <Card className="flex flex-col gap-2">
          <CardHeader>
            <CardTitle>WSHS Koding Klub Founder and Lead</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Created to incite passion into others with interesting projects, Koding Klub was a medium through which I could teach lower school students various programming concepts and applications. I wish it was called something different though...
            </p>
          </CardContent>
          <CardFooter>
            <p>2022 - 2023</p>
          </CardFooter>
        </Card>
        <Card className="flex flex-col gap-2">
          <CardHeader>
            <CardTitle>Discord Moderator</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Very hard work trust!
            </p>
          </CardContent>
          <CardFooter>
            <p>2020 - 2024</p>
          </CardFooter>
        </Card>
      </section>
      <section className="container grid max-w-[980px] items-center gap-4 pb-8 pt-6 md:py-10">
        <h2 className="text-center md:text-left text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
          Achievements
        </h2>
        <Card className="flex flex-col gap-2">
          <CardHeader>
              <CardTitle>ATAR of 99.75</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Does anyone even care about this...
            </p>
          </CardContent>
          <CardFooter>
            <p>2023</p>
          </CardFooter>
        </Card>
        <Card className="flex flex-col gap-2">
          <CardHeader>
              <CardTitle>Top of Computer Science ATAR at WSHS</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Does this make me cool?
            </p>
          </CardContent>
          <CardFooter>
            <p>2022 - 2023</p>
          </CardFooter>
        </Card>
        <Card className="flex flex-col gap-2">
          <CardHeader>
              <CardTitle>High Distinction in a Hecc Ton of Math Competitions</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              AMC and stuff but like I got so many that I&apos;ve lost count.
            </p>
          </CardContent>
          <CardFooter>
            <p>2018 - 2023</p>
          </CardFooter>
        </Card>
        <Card className="flex flex-col gap-2">
          <CardHeader>
            <CardTitle>FTC First Place Winners</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We were a team and we built and coded a cool robot and won wow.
            </p>
          </CardContent>
          <CardFooter>
            <p>2018</p>
          </CardFooter>
        </Card>
      </section>
      <section className="container grid max-w-[980px] items-center gap-6 pb-8 pt-6 md:py-10"> {/* FIX THIS WHOLE SECTION ON MOBILE!!! */}
        <h2 className="text-center md:text-left text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">
          You Sound Unfathomably Based! Where Can I Find You?
        </h2>
        <Card className="flex flex-col items-end bg-[url('/licc.gif')] bg-contain aspect-square justify-end">
          <CardContent className="flex flex-col gap-4">
            <Link href="https://github.com/rin-senpai" className={buttonVariants({ variant: "black", size: "lg" })}>
              <Github className="mr-2 h-4 w-4" /> Github [<pre>rin-senpai</pre>]
            </Link>
            <Link href="https://discord.com/users/346948643523264532" className={buttonVariants({ variant: "black", size: "lg"})}>
              <Gamepad2 className="mr-2 h-4 w-4" /> Discord [<pre>kuru.rin</pre>]
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
