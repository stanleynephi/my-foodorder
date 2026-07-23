/**create a panel that has the food categories sold at the restaurant
 * import the food categories and create a loop for the filters
 *
 */
import Link from "next/link"
import { Foodfilter } from "../lib/foodfilters"

export default async function Filterpanel({
  searchParams,
}: {
  searchParams?: { category?: string }
}) {
  const categories = Foodfilter
  const activecategory = searchParams?.category

  console.log("This is the active category", activecategory)

  return (
    <div className="mt-10 flex w-full justify-center px-4">
      <div className="flex max-w-fit items-center gap-2 overflow-x-auto rounded-full border border-[#3a3327] bg-[#111111] px-2 py-2">
        {categories.map((categories) => {
          const isActive = activecategory === categories.category

          return (
            <Link
              key={categories.category}
              href={`/order?category=${categories.category}`}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-[#C9A227] text-black"
                  : "text-[#F3ECDD] hover:bg-[#1a1a1a]"
              }`}
            >
              {categories.category}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
