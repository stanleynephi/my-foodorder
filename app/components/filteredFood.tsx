/**
 * Filtered food list — fetches API items for a category (when the
 * external API actually supports it) and merges them with any
 * hardcoded static items for that same category.
 */
"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { getAllFood } from "../api/foodmenu/routes"
import OrderDialog from "./ui/orderdialogue"
import { staticMenuItems } from "../lib/staticMenuItems"

type Food = {
  id: number | string
  img: string
  dsc: string
  name: string
  price: number
  rate: number
  country: string
}

export default function FilteredFood({ category }: { category: string }) {
  const [food, setFood] = useState<Food[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // store the food selected for ordering
  const [selectedFood, setSelectedFood] = useState<Food | null>(null)

  useEffect(() => {
    async function loadFood() {
      setLoading(true)
      setError(null)

      try {
        // getAllFood now returns [] (never throws) for categories the
        // external API doesn't support, e.g. "Rice", "Chicken Stew"
        const apiData: Food[] = await getAllFood(category)
        const data = apiData.slice(0, 6)

        // staticMenuItems is shaped like MenuItem (image, description),
        // not Food (img, dsc, rate, country) — reshape before combining
        const filtered: Food[] = staticMenuItems
          .filter((item) => item.category === category)
          .map((item) => ({
            id: item.id,
            img: item.img ?? "",
            dsc: item.dsc ?? "",
            name: item.name,
            price: item.price,
            rate: 0,
            country: "Ghana",
          }))

        console.log("Filtered static items:", filtered)

        // static items shown first, then whatever the API returns
        const combined: Food[] = [...filtered, ...data]

        console.log("combined food data", combined)
        setFood(combined)
      } catch (err) {
        console.error("Failed to load food:", err)
        setError("Couldn't load the menu right now. Please try again.")
        setFood([])
      } finally {
        setLoading(false)
      }
    }

    loadFood()
  }, [category])

  if (loading) {
    return <p className="mt-10 text-center text-[#8a8378]">Loading menu...</p>
  }

  if (error) {
    return <p className="mt-10 text-center text-red-500">{error}</p>
  }

  if (food.length === 0) {
    return (
      <p className="mt-10 text-center text-[#8a8378]">
        No items found in this category yet.
      </p>
    )
  }

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 xl:grid-cols-4">
        {food.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-[#3a3327] bg-[#111111] shadow-sm transition hover:shadow-lg hover:shadow-black/40"
          >
            <div className="relative h-56 w-full">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-3 p-4">
              <div>
                <h2 className="text-lg font-bold text-[#F3ECDD]">
                  {item.name}
                </h2>

                <p className="mt-1 line-clamp-2 text-sm text-[#8a8378]">
                  {item.dsc}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-[#C9A227]">
                  ₵{item.price}
                </span>

                <span className="rounded-full bg-[#C9A227]/10 px-2 py-1 text-sm font-medium text-[#C9A227]">
                  ⭐ {item.rate}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-[#8a8378]">
                <span>{item.country}</span>

                <button
                  onClick={() => setSelectedFood(item)}
                  className="rounded-lg bg-[#C9A227] px-4 py-2 font-semibold text-black transition hover:opacity-90"
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <OrderDialog
        food={selectedFood}
        open={selectedFood !== null}
        onClose={() => setSelectedFood(null)}
      />
    </>
  )
}
