export const CopyIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M6.5 15.25V15.25C5.5335 15.25 4.75 14.4665 4.75 13.5V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H13.5C14.4665 4.75 15.25 5.5335 15.25 6.5V6.5"
    ></path>
    <rect
      width="10.5"
      height="10.5"
      x="8.75"
      y="8.75"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      rx="2"
    ></rect>
  </svg>
)

export const CopiedIcon = () => (
  <svg
    color="rgb(0 71 20)"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M12.75 4.75h-5a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h3.5m1.5-14.5v3.5a2 2 0 0 0 2 2h3.5m-5.5-5.5 5.5 5.5m0 0v1m1 3.5s-1.929 2.09-2.893 4.5l-1.607-1.929"
    ></path>
  </svg>
)
