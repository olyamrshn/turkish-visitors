export const GlobeIcon: React.FC<{
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
      d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M9.25 5.5V9.25C9.25 10.9069 7.90685 12.25 6.25 12.25H5"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M10 18.5C10 18.5 10.75 17 10.75 15C10.75 12.8501 13.1535 14.0281 13.8267 10.7433C14.0484 9.6612 14.8954 8.75 16 8.75H18"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
)
