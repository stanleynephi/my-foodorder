/**this is the home page.. the layout we have the
 *1.  Hero Welcome Barner using an image of a restaurant and some text about the restaurant name
  2. CTA - Ordernow which will move to the foor catalogue page.
 */

import Link from "next/link"
import FoodCarousel from "./components/foodcarousel"
import Trust from "./components/serviceorder"
import Header from "./components/header"
import Footer from "./components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <section className="relative flex flex-col items-start justify-center bg-black px-4 py-24 sm:px-6 lg:py-32">
        {/* soft ambient glow behind the headline */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/4 top-1/3 -z-0 h-72 w-72 rounded-full bg-[#C9A227] opacity-20 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#C9A227]">
            UCC AMAMOMA · CAPE COAST
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#F3ECDD] sm:text-5xl lg:text-6xl">
            Welcome to <span className="text-[#C9A227]">Jegisa&apos;s</span>{" "}
            Restaurant.
            <br />
            Home of affordable and delicious cuisine.
          </h1>

          <Link
            href="/order"
            className="mt-8 inline-block w-fit rounded-lg bg-[#C9A227] px-8 py-4 text-lg font-semibold text-black shadow-lg transition duration-300 hover:scale-[1.02]"
          >
            Order Now
          </Link>
        </div>
      </section>
      <div className="pointer-events-none">
        <FoodCarousel />
      </div>
      <Trust />
      <Footer />
    </>
  )
}
