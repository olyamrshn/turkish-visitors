import Link from "next/link"

export default function Home() {
  return (
    <>
      <header className="pt-5 pl-10 font-bold text-white text-2xl text-left xs:text-center">
        Transport Evolution Dynamics
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
      <div className="p-2">
        <div className="grid grid-cols-12 gap-4">
          {/* cabin */}
          <div className="col-span-3 h-32 bg-blue-900"></div>
          <div className="col-span-3 h-16 bg-blue-900"></div>

          {/* Space between cabin and trailer */}
          <div className="col-span-1 h-16 bg-blue-800"></div>

          {/* Trailer */}
          <div className="col-span-5 h-48 bg-blue-900"></div>

          {/* Wheels */}
          <div className="col-span-1 row-start-2 row-end-4 h-16 bg-blue-900"></div>
          <div className="col-span-1 row-start-2 row-end-4 col-start-4 h-16 bg-blue-900"></div>
          <div className="col-span-1 row-start-2 row-end-4 col-start-6 h-16 bg-blue-900"></div>
          <div className="col-span-1 row-start-2 row-end-4 col-start-8 h-16 bg-blue-900"></div>
          <div className="col-span-1 row-start-2 row-end-4 col-start-12 h-16 bg-blue-900"></div>
        </div>
      </div>
    </>
  )
}
