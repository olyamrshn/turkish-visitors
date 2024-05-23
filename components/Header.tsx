import { translate } from "../utils/translate"
import { useLanguage } from "../contexts/LanguageContext"
import Link from "next/link"
import { Logo } from "../public/svg/logo"
import { Moon } from "../public/svg/moon"
import { SlMenu } from "react-icons/sl"

interface HeaderProps {
  darkMode: boolean
  toggleDarkMode: () => void
  showMainLink?: boolean
  language?: string
  setIsNavOpen?: (isOpen: boolean) => void
}

interface LogoLinkProps {
  href: string
  isMainLink: boolean
}

const HeaderLink = ({ href, isMainLink }: LogoLinkProps) => {
  const { language } = useLanguage()
  return (
    <Link href={href}>
      <div
        className={`justify-center pt-10 flex flex-row items-center text-left ${
          isMainLink
            ? "pb-10 cursor-default"
            : "pb-10 hover:opacity-60 cursor-pointer"
        } font-bold text-2xl`}
      >
        <Logo className="xs-logo xl-logo" />
        <h1 className="ml-1 flex items-center">
          <span className="xs-headerline xl-headerline font-thin bg-current inline-block">
            |
          </span>
          <div className="ml-2 text-xs font-light opacity-75">
            <span>{translate("logoFirst", language)}</span>
            <br />
            <span style={{ whiteSpace: "nowrap" }}>
              {translate("logoSecond", language)}
            </span>
          </div>
        </h1>
      </div>
    </Link>
  )
}

export const Header = ({
  darkMode,
  toggleDarkMode,
  showMainLink,
  setIsNavOpen,
}: HeaderProps) => {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLanguage = language === "EN" ? "TR" : "EN"
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  return (
    <header
      key={String(darkMode)}
      style={{
        color: "white",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        margin: "0 auto",
        maxHeight: "80px",
        alignItems: "center",
        marginBottom: "20px",
      }}
      className="px-5 pt-2 font-bold text-2xl header-bg-color text-left flex justify-between"
    >
      <HeaderLink href={showMainLink ? "#" : "/"} isMainLink={!!showMainLink} />
      <div className="flex flex-row gap-5 items-center">
        {showMainLink ? (
          <>
            <button
              className="font-bold text-white"
              onClick={() => setIsNavOpen && setIsNavOpen(true)}
            >
              <SlMenu className="w-6 h-6" />
            </button>
            <button
              onClick={toggleLanguage}
              className="text-lg font-normal text-white"
            >
              {translate("language", language)}
            </button>
            <button className="relative" onClick={toggleDarkMode}>
              <Moon
                className="xs:w-7 xs:h-7 xl:w-9 xl:h-9"
                style={{ width: "28px", height: "28px" }}
              />
            </button>
          </>
        ) : (
          <button
            className="font-bold text-white"
            onClick={() => setIsNavOpen && setIsNavOpen(true)}
          >
            <SlMenu className="w-6 h-6" />
          </button>
        )}
      </div>
    </header>
  )
}
