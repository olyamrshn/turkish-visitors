import { Logo } from "../public/svg/logo"

const Footer = () => {
  return (
    <footer
      className="xs-footer xl-footer text-xs bg-blue-200 py-4 xs-footer-leftpadding xl-footer-leftpadding"
      style={{ backgroundColor: "rgb(63 90 181)" }}
    >
      <div className="flex flex-row items-center space-x-">
        <Logo className="xs-footer-logo xl-footer-logo" />
        <p style={{ color: "white", paddingLeft: "2px" }}>Logistic Company</p>
      </div>

      <p style={{ color: "white" }}>© 2024 ADL. All rights reserved.</p>
    </footer>
  )
}

export default Footer
