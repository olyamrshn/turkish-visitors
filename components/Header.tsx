import Link from "next/link"
import { Logo } from "../public/svg/logo"
import { MdBrightness3 } from "react-icons/md"
import { IoSunnyOutline } from "react-icons/io5"
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
      className={`hover:opacity-60 flex flex-row text-left ${
        isMainLink ? "" : "pb-10"
      } font-bold text-2xl theme-text-color`}
    >
      <Logo className="xs:w-12 xs:h-12 xl:w-20 xl:h-20" />
      <h1 className="ml-1 flex items-center">
        <span
          className="xs:text-2xl xl:text-4xl"
          style={{ letterSpacing: "-0.05em", fontWeight: "900" }}
        >
          TED
        </span>
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
      <HeaderLink href="https://www.ted.international/en" isMainLink={true} />
    ) : (
      <HeaderLink href="/" isMainLink={false} />
    )}
    <div>
      <button
        className="p-2 transition-colors relative"
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "50%",
        }}
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <IoSunnyOutline className="xs:w-7 xs:h-7 xl:w-10 xl:h-10" />
        ) : (
          <MdBrightness3 className="xs:w-7 xs:h-7 xl:w-10 xl:h-10" />
        )}
      </button>
    </div>
  </header>
)
