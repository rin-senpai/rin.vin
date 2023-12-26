import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/ui/main-nav"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function SiteHeader() {
  return (
    <header className="fixed self-center z-40 m-4 max-w-[1000px] w-[calc(100%-32px)]  border bg-background/80 rounded-2xl backdrop-blur">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1 mr-[-16px]">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
