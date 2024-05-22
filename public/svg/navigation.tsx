export const HomeIcon: React.FC<{
  style: React.CSSProperties
  className?: string
}> = ({ style, className }) => (
  <svg style={style} className={className} fill="none" viewBox="0 0 24 24">
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"
    ></path>
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"
    ></path>
  </svg>
)

export const NavGlobeIcon: React.FC<{
  style: React.CSSProperties
  className?: string
}> = ({ style, className }) => (
  <svg
    style={style}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9.25 5.5V9.25C9.25 10.9069 7.90685 12.25 6.25 12.25H5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M10 18.5C10 18.5 10.75 17 10.75 15C10.75 12.8501 13.1535 14.0281 13.8267 10.7433C14.0484 9.6612 14.8954 8.75 16 8.75H18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
)

export const NavContactIcon: React.FC<{
  style: React.CSSProperties
  className?: string
}> = ({ style, className }) => (
  <svg
    style={style}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      fill="none"
      d="M16.75 4.75h1.5a1 1 0 0 1 1 1v2.5m-2.5-3.5h-9a3 3 0 0 0-3 3v8.5a3 3 0 0 0 3 3h9m0-14.5v3.5m0 11h1.5a1 1 0 0 0 1-1v-2.5m-2.5 3.5v-3.5m0-7.5h2.5m-2.5 0V12m2.5-3.75V12m-2.5 3.75h2.5m-2.5 0V12m2.5 3.75V12m-2.5 0h2.5m-10.5 3.25s.675-1.5 2.25-1.5 2.25 1.5 2.25 1.5m-1-5.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
    ></path>
  </svg>
)

export const NavInfoIcon: React.FC<{
  style: React.CSSProperties
  className?: string
}> = ({ style, className }) => (
  <svg
    style={style}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
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

export const NavLogo = ({ className }: { className: string }) => (
  <svg
    className={className}
    color="rgb(var(--svg-fill-color))"
    viewBox="0 0 952.000000 522.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,522.000000) scale(0.100000,-0.100000)"
      stroke="none"
      fill="currentColor"
    >
      <path
        d="M1932 4353 c-13 -32 -30 -71 -37 -88 -8 -16 -23 -52 -35 -80 -12 -27
-25 -59 -30 -70 -5 -11 -37 -85 -71 -165 -34 -80 -79 -182 -100 -228 -22 -45
-39 -85 -39 -88 0 -6 -3 -13 -79 -182 -28 -62 -51 -116 -51 -120 0 -4 -7 -20
-15 -36 -8 -15 -42 -91 -75 -168 -33 -76 -71 -162 -84 -191 -40 -85 -66 -149
-66 -158 0 -5 141 -9 314 -9 l314 0 10 28 c112 291 212 523 226 526 4 0 16
-19 26 -44 9 -25 29 -72 44 -105 59 -130 78 -175 121 -280 20 -49 40 -99 45
-110 11 -24 127 -300 199 -475 29 -69 58 -138 65 -155 40 -93 120 -286 134
-320 16 -42 49 -116 88 -202 13 -28 24 -55 24 -58 0 -4 6 -21 14 -38 7 -18 23
-57 35 -87 12 -30 26 -64 31 -75 5 -11 21 -49 35 -85 14 -36 30 -74 35 -85 96
-214 140 -318 140 -332 0 -10 61 -13 325 -13 l324 0 -13 38 c-8 20 -51 123
-96 227 -45 105 -92 215 -105 245 -22 55 -152 360 -185 435 -10 22 -27 65 -38
95 -11 30 -57 141 -102 245 -45 105 -94 222 -110 260 -15 39 -39 95 -53 125
-14 30 -42 96 -63 145 -35 88 -61 147 -90 212 -8 17 -14 33 -14 36 0 3 -18 43
-39 89 -21 45 -62 137 -89 204 -28 66 -63 147 -77 180 -15 32 -33 73 -40 89
-8 17 -26 57 -40 90 -15 33 -35 81 -45 106 -10 26 -28 66 -39 90 -31 69 -131
307 -131 313 0 3 -11 29 -24 58 -14 29 -45 100 -70 158 l-45 105 -168 3 -168
2 -23 -57z"
      />
      <path
        d="M3670 3288 l0 -1123 46 -110 c25 -60 72 -177 105 -260 33 -82 64
-159 69 -170 5 -11 34 -81 65 -155 31 -74 60 -144 65 -155 5 -11 34 -81 65
-155 31 -74 60 -144 65 -155 5 -11 20 -47 34 -80 l24 -60 519 0 c542 0 529 -1
713 47 498 129 934 523 1123 1013 68 176 85 234 113 390 25 140 26 463 1 590
-39 198 -91 354 -177 530 -167 340 -413 596 -750 777 -92 50 -251 115 -340
140 -205 57 -130 53 -967 56 l-773 3 0 -1123z m1365 523 c181 -32 201 -38 355
-108 206 -95 430 -308 542 -513 143 -264 181 -561 109 -856 -25 -102 -40 -142
-89 -240 -51 -102 -85 -152 -159 -235 -133 -150 -269 -254 -411 -313 -48 -21
-96 -41 -107 -46 -122 -56 -266 -71 -654 -65 -179 3 -332 5 -338 5 -10 0 -13
244 -13 1188 0 654 3 1192 7 1195 3 4 151 7 327 7 269 0 339 -3 431 -19z"
      />
      <path
        d="M7032 2638 l3 -1773 1033 -3 1032 -2 -2 287 -3 287 -735 4 c-404 2
-736 4 -737 6 -1 1 -4 668 -5 1481 l-3 1480 -293 3 -292 2 2 -1772z"
      />
      <path
        d="M1072 2388 c-5 -7 -13 -24 -17 -38 -4 -14 -18 -47 -30 -75 -13 -27
-35 -76 -49 -107 -26 -58 -48 -107 -104 -228 -72 -156 -98 -213 -154 -340 -32
-74 -63 -144 -68 -155 -13 -29 -241 -558 -247 -572 -4 -10 60 -13 300 -13
l304 0 23 52 c12 29 55 134 95 233 95 234 103 254 209 500 l73 170 464 5 c405
4 464 7 461 20 -4 22 -223 533 -235 548 -7 9 -122 12 -512 12 -390 0 -505 -3
-513 -12z"
      />
      <path
        d="M1588 1282 c-67 -157 -168 -408 -168 -417 0 -3 297 -5 660 -5 363 0
660 3 660 6 0 3 -15 42 -34 87 -19 45 -67 159 -106 252 -39 94 -78 185 -86
203 l-15 32 -422 0 -422 0 -67 -158z"
      />
    </g>
  </svg>
)
