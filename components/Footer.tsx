import { Logo } from "../public/svg/logo"

export const Footer = () => {
  return (
    <footer
      className="flex pb-5 items-center w-full"
      style={{ height: "60px" }}
    >
      <div className="flex flex-row text-left  px-5 pb-2 font-bold text-2xl theme-text-color">
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
            <span>Evolution Dynamics</span>
          </div>
        </h1>
      </div>
    </footer>
  )
}
