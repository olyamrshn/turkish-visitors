import { translate } from "../utils/translate"
import { useLanguage } from "../contexts/LanguageContext"
import { IoCloseOutline } from "react-icons/io5"
import { HomeIcon } from "@/public/svg/navigation"
import { NavGlobeIcon } from "../public/svg/navigation"
import { NavContactIcon } from "../public/svg/navigation"
import { NavInfoIcon } from "../public/svg/navigation"
import Link from "next/link"

export default function Navigation({ onClose }: { onClose: () => void }) {
  const { language } = useLanguage()

  return (
    <div
      className="fixed inset-0 xl-navigation xs-navigation navigation-bg navigation-text"
      style={{
        zIndex: 10000000,
        opacity: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingTop: "10%",
      }}
    >
      <button
        className="absolute top-10 right-10"
        onClick={onClose}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#00008B")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
      >
        <IoCloseOutline size={20} className="color-white" />
      </button>
      <div className="flex flex-col items-center h-full space-y-5">
        <Link href="/">
          <button
            className="text-semibold text-xl flex flex-row items-center"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00008B")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            <HomeIcon
              style={{ width: "26px", height: "26px" }}
              className="mr-2"
            />
            {translate("homepage", language)}
          </button>
        </Link>
        <Link href="/about">
          <button
            className="text-semibold text-l flex flex-row items-center"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00008B")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            <NavGlobeIcon
              style={{ width: "26px", height: "26px" }}
              className="mr-2"
            />
            {translate("aboutTitle", language)}
          </button>
        </Link>
        <Link href="/contacts">
          <button
            className="text-semibold text-l flex flex-row items-center"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00008B")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            <NavContactIcon
              style={{ width: "26px", height: "26px" }}
              className="mr-2"
            />
            {translate("contactUs", language)}
          </button>
        </Link>
        <Link href="/legalinfo">
          <button
            className="text-semibold text-l flex flex-row items-center"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00008B")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            <NavInfoIcon
              style={{ width: "26px", height: "26px" }}
              className="mr-2"
            />
            {translate("legalInfo", language)}
          </button>
        </Link>
      </div>
    </div>
  )
}
