import Link from "next/link"
import { Logo } from "../public/svg/logo"
import { MdBrightness1, MdBrightness3 } from "react-icons/md"

interface HeaderProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
  showMainLink?: boolean
}

export const Header = ({
  isDarkMode,
  toggleDarkMode,
  showMainLink,
}: HeaderProps) => (
  <header className="pt-5 pl-10 font-bold text-2xl text-left xs:text-center flex justify-between">
    {showMainLink ? (
      <Link href="https://www.ted.international/en">
        <div className="flex flex-row items-center">
          <Logo />
          <h1 className="ml-1 flex items-center">
            <span>TED</span>
            <span className="ml-2 mr-1 w-px h-8 bg-current inline-block">
              |
            </span>
            <div className="ml-2 text-xs font-light opacity-75">
              <span>Transport</span>
              <br />
              <span>Evolution Dynamics</span>
            </div>
          </h1>
        </div>
      </Link>
    ) : (
      <Link href="/">
        <div className="flex flex-row items-center">
          <Logo />
          <h1 className="ml-1 flex items-center">
            <span>TED</span>
            <span className="ml-2 mr-1 w-1 h-8 bg-black inline-block">|</span>
            <div className="ml-2 text-xs font-light opacity-75">
              <span>Transport</span>
              <br />
              <span>Evolution Dynamics</span>
            </div>
          </h1>
        </div>
      </Link>
    )}
    <div className="pr-10">
      <button
        className="p-2 transition-colors relative"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <MdBrightness1 style={{ width: "40px", height: "40px" }} />
        ) : (
          <MdBrightness3 style={{ width: "40px", height: "40px" }} />
        )}
      </button>
    </div>
  </header>
)
