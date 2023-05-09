import { MainNav } from "@/components/Navbar/NavbarLinks"
import TeamSwitcher from "./TeamSwitcher"
import { Search } from "./SearchBar"
import { UserNav } from "./UserMenu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center px-4">
        <TeamSwitcher />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
