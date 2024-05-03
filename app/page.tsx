import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <header>company logo</header>
      <main className="flex min-h-screen flex-col items-center justify-between p-20">
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
          <Link
            href="/about"
            className="group rounded-lg border border-transparent px-5  pt-5 pb-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-start"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              About{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              The world does not stand still, and neither do we
            </p>
          </Link>

          <Link
            href="/contacts"
            className="group rounded-lg border border-transparent px-5  pt-5 pb-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-start"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Contacts{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              text text text
            </p>
          </Link>

          <Link
            href="/legalinfo"
            className="group rounded-lg border border-transparent px-5  pt-5 pb-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-col justify-start"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Legal Information{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              text text text
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
