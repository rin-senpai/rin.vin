import Link from 'next/link'

import { buttonVariants } from "@/components/ui/button"

export default function Seggs() {
  const kofiStyle = {
    border:'none',
    width:'100%',
    background:'#000'
  } // this is thing that will be less cursed when I "properly" implement a ko-fi widget

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">uohhh 😭</h1>
      <iframe id='kofiframe' src='https://ko-fi.com/voxeldev/?hidefeed=true&widget=true&embed=true&preview=true' style={kofiStyle} height='712' title='PLEASE'></iframe>
      <Link
          href='/'
          className={buttonVariants({ variant: "outline" })}
      >
        Get the frick out
      </Link>
    </main>
  )
}