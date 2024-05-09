export const CallIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
    ></path>
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M14 5.02936C16.4312 5.72562 18.3396 7.65944 19 10.1056"
    ></path>
  </svg>
)

export const TimerIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    color="rgb(var(--svg-fill-color))"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M19.25 9.25v-.5a2 2 0 0 0-2-2H6.75a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h2.5m5.75-5.5V15l1.25 1.25M8 4.75v3.5m8-3.5v3.5m-1 11a4.25 4.25 0 1 1 0-8.5 4.25 4.25 0 0 1 0 8.5Z"
    ></path>
  </svg>
)

export const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24">
    <circle
      cx="12"
      cy="12"
      r="3.25"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    ></circle>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C18.8125 4.75 19.25 9.125 19.25 12V13.25C19.25 14.3546 18.3546 15.25 17.25 15.25V15.25C16.1454 15.25 15.25 14.3546 15.25 13.25V8.75"
    ></path>
  </svg>
)

export const PinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M18.25 11C18.25 15 12 19.25 12 19.25C12 19.25 5.75 15 5.75 11C5.75 7.5 8.68629 4.75 12 4.75C15.3137 4.75 18.25 7.5 18.25 11Z"
    ></path>
    <circle
      cx="12"
      cy="11"
      r="2.25"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    ></circle>
  </svg>
)
