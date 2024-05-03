"use client"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <header className="pt-5 pl-10 font-bold text-white text-2xl text-left xs:text-center">
        <div className="flex flex-row items-center">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 1220.000000 1204.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,1204.000000) scale(0.100000,-0.100000)"
              fill="#fff"
              stroke="none"
            >
              <path
                d="M5490 10883 c-19 -1 -87 -8 -150 -14 -1152 -109 -2273 -740 -3069
-1729 -418 -519 -730 -1092 -926 -1700 -284 -883 -279 -1745 15 -2603 65 -189
87 -247 96 -247 12 0 273 230 395 347 770 741 1330 1631 1648 2616 140 434
236 916 286 1437 l6 65 432 24 c238 12 466 25 508 28 l76 6 6 -64 c17 -185
125 -528 233 -739 189 -372 447 -601 770 -682 125 -32 385 -32 520 -1 300 70
580 262 746 513 79 120 124 215 173 365 55 168 85 331 93 508 l7 142 285 17
c157 9 308 17 336 17 l50 1 18 -77 c96 -412 385 -980 632 -1242 89 -94 205
-184 319 -246 213 -117 589 -217 910 -245 143 -12 345 -13 363 -2 9 7 -3 53
-52 198 -247 725 -628 1348 -1156 1888 -401 411 -821 717 -1315 960 -517 255
-1026 400 -1585 451 -147 13 -564 19 -670 8z"
              />
              <path
                d="M7720 8332 c-34 -231 -138 -473 -288 -669 -59 -76 -203 -223 -271
-275 l-34 -26 89 18 c294 60 633 97 986 108 l238 7 -93 61 c-280 187 -472 439
-582 766 l-32 96 -13 -86z"
              />
              <path
                d="M4346 8134 c-28 -418 -135 -872 -295 -1253 -74 -175 -209 -442 -280
-551 -18 -28 -26 -32 94 45 502 321 1106 558 1720 674 99 19 142 30 125 34
-14 3 -63 13 -110 22 -183 35 -430 136 -585 240 -293 198 -513 479 -635 813
l-27 74 -7 -98z"
              />
              <path
                d="M8755 7180 c-563 -34 -1103 -107 -1600 -216 -1522 -334 -2882 -1009
-4065 -2018 -371 -316 -826 -776 -1128 -1138 l-73 -88 71 -99 c135 -191 374
-482 391 -478 4 1 46 52 93 114 48 61 133 167 190 235 1036 1240 2335 2182
3811 2763 1132 445 2399 673 3629 653 l278 -5 -5 36 c-3 20 -11 73 -17 118
l-12 82 -42 6 c-240 33 -1184 55 -1521 35z"
              />
              <path
                d="M9899 6679 c-2084 -84 -4046 -928 -5517 -2373 -549 -539 -957 -1057
-1375 -1743 -9 -14 146 -129 318 -236 127 -79 334 -192 339 -186 2 2 38 63 79
135 605 1051 1422 1955 2382 2636 1199 851 2681 1389 4175 1516 l85 7 3 95 c2
52 0 110 -3 128 l-6 32 -147 -2 c-81 0 -231 -4 -333 -9z"
              />
              <path
                d="M10340 6213 c-1045 -176 -1988 -520 -2865 -1046 -1134 -680 -1963
-1520 -2588 -2622 -133 -236 -357 -693 -357 -730 0 -22 323 -101 550 -134 231
-34 439 -44 758 -38 390 8 619 37 963 123 1196 299 2259 1106 2931 2224 392
652 612 1360 654 2108 7 131 10 124 -46 115z"
              />
            </g>
          </svg>
          <h1 className="ml-2 flex items-center">
            <span>TED</span>
            <span className="ml-2 text-base opacity-50">|</span>
            <div className="ml-2 text-xs font-thin opacity-75">
              <span>Transport</span>
              <br />
              <span>Evolution Dynamics</span>
            </div>
          </h1>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-20">
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
          <Link
            href="/about"
            className="group rounded-lg border border-transparent px-5  pt-5 pb-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-start"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              About{" "}
              <span
                className="leading-[140%] -tracking-[0.02em] inline-block transition-transform
              group-hover:brightness-125 motion-reduce:transform-none"
              >
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-m opacity-50 group-hover:opacity-100 transition-opacity duration-300">
              The world does not stand still, and neither do we
            </p>
          </Link>

          <Link
            href="/contacts"
            className="group rounded-lg border border-transparent px-5  pt-5 pb-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-start"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Contacts{" "}
              <span className="leading-[140%] -tracking-[0.02em] inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-m opacity-50 group-hover:opacity-100 transition-opacity duration-300">
              text text text
            </p>
          </Link>

          <Link
            href="/legalinfo"
            className="group rounded-lg border border-transparent px-5  pt-5 pb-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-start"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Legal Information{" "}
              <span className="leading-[140%] -tracking-[0.02em] inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-m opacity-50 group-hover:opacity-100 transition-opacity duration-300">
              text text text
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
