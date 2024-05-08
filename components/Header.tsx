import Link from "next/link"
import { Logo } from "../public/svg/logo"
import { Moon } from "../public/svg/moon"

interface HeaderProps {
  darkMode: boolean
  toggleDarkMode: () => void
  showMainLink?: boolean
}

interface LogoLinkProps {
  href: string
  isMainLink: boolean
}
const HeaderLink = ({ href, isMainLink }: LogoLinkProps) => (
  <Link href={href}>
    <div
      className={` flex flex-row text-left ${
        isMainLink ? "" : "pb-10 hover:opacity-60"
      } font-bold text-2xl theme-text-color`}
    >
      <Logo className="xs:w-8 xs:h-8 xl:w-18 xl:h-18" />
      <h1 className="ml-1 flex items-center">
        <span className="ml-2 mr-1 w-px h-8 bg-current font-light inline-block">
          |
        </span>
        <div className="ml-2 text-xs font-light opacity-75">
          <span>Transport</span>
          <br />
          <span style={{ whiteSpace: "nowrap" }}>Evolution Dynamics</span>
        </div>
      </h1>
    </div>
  </Link>
)

export const Header = ({
  darkMode,
  toggleDarkMode,
  showMainLink,
}: HeaderProps) => (
  <header
    key={String(darkMode)}
    className="pt-5 px-5 font-bold text-2xl text-left xs:text-center flex justify-between"
  >
    {showMainLink ? (
      <HeaderLink href="#" isMainLink={true} />
    ) : (
      <HeaderLink href="/" isMainLink={false} />
    )}
    <div>
      <button
        className="p-2 transition-colors relative"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <Moon
            className="xs:w-7 xs:h-7 xl:w-9 xl:h-9"
            style={{ width: "28px", height: "28px" }}
          />
        ) : (
          <Moon
            className="xs:w-7 xs:h-7 xl:w-9 xl:h-9"
            style={{ width: "28px", height: "28px" }}
          />
        )}
      </button>
    </div>
  </header>
)
