import { translate } from "../utils/translate"
import { useLanguage } from "../contexts/LanguageContext"
import { RiCloseLargeLine } from "react-icons/ri"
import {
  HomeIcon,
  NavGlobeIcon,
  NavContactIcon,
  NavInfoIcon,
  NavLogo,
} from "@/public/svg/navigation"
import Link from "next/link"

export default function Navigation({ onClose }: { onClose: () => void }) {
  const { language } = useLanguage()

  return (
    <div
      className="xs-text-align xl-text-align fixed inset-0 xl-navigation xs-navigation navigation-bg navigation-text"
      style={{
        zIndex: 10000000,
        opacity: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        textAlign: "left",
        boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
      }}
    >
      <div className="absolute top-5 right-5 left-5 flex justify-between items-center">
        <NavLogo className="w-12 h-10" />
        <button onClick={onClose}>
          <RiCloseLargeLine size={20} className="color-white" />
        </button>
      </div>
      <div
        style={{ marginTop: "100px" }}
        className="flex flex-col items-left pl-10 h-full space-y-5"
      >
        <Link href="/">
          <button className="flex flex-row items-center">
            <HomeIcon
              className="mr-2"
              style={{ width: "26px", height: "26px" }}
            />
            <p className="font-semibold text-xl">
              {" "}
              {translate("homepage", language)}
            </p>
          </button>
        </Link>
        <Link href="/about">
          <button className="text-sm flex flex-row items-center">
            <NavGlobeIcon
              className="mr-2"
              style={{ width: "26px", height: "26px" }}
            />
            <p className="font-semibold text-xl">
              {translate("aboutTitle", language)} <br />
            </p>
          </button>
        </Link>
        <Link href="/contacts">
          <button className="text-sm flex flex-row items-center">
            <NavContactIcon
              style={{ width: "26px", height: "26px" }}
              className="mr-2"
            />
            <p className="font-semibold text-xl">
              {translate("contactUs", language)} <br />
            </p>
          </button>
        </Link>
        <Link href="/legalinfo">
          <button className="text-sm flex flex-row items-center">
            <NavInfoIcon
              style={{ width: "26px", height: "26px" }}
              className="mr-2"
            />
            <p className="font-semibold text-xl">
              {" "}
              {translate("legalInfo", language)}
            </p>
          </button>
        </Link>
      </div>
    </div>
  )
}
