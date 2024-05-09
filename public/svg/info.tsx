export const InfoIcon: React.FC<{
  style: React.CSSProperties
  className?: string
}> = ({ style, className }) => (
  <svg
    style={style}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    color="rgb(var(--svg-fill-color))"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 19.25C8 19.25 4.75 17.25 4.75 17.25V5.75C4.75 5.75 8.5 6.75 12 6.75V19.25ZM12 19.25C16 19.25 19.25 17.25 19.25 17.25V5.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 6.75C14.5 6.75 16.25 4.75 16.25 4.75V17C16.25 17 14.5 19 12 19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
)
