import { translate } from "../utils/translate"
import { useLanguage } from "../contexts/LanguageContext"
import { Logo } from "../public/svg/logo"

const Footer = () => {
  const { language } = useLanguage()
  return (
    <footer
      className="xs-footer xl-footer pb-5 text-xs bg-blue-200 py-4 xs-footer-leftpadding xl-footer-leftpadding"
      style={{ backgroundColor: "rgb(63 90 181)" }}
    >
      <div className="flex flex-row items-center">
        <Logo className="xs-footer-logo xl-footer-logo" />
        <p style={{ color: "white", paddingLeft: "2px" }}>
          {translate("footerLogo", language)}
        </p>
      </div>
      <p style={{ color: "white" }}>{translate("footerRights", language)}</p>
    </footer>
  )
}

export default Footer
