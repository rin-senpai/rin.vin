import Link from "next/link"
import Image from 'next/image'

import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Jug Monke
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          None of this is my own code!!
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/seggs"
          className={buttonVariants()}
        >
          Seggs
        </Link>
      </div>
      <div className="flex gap-4">
        <Image 
          src="/kurukuru.gif"
          width={512}
          height={512}
          alt="kurukuru"
        />
      </div>
    </section>
  )
}
