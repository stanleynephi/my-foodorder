/**filtered food.. make an api call and pass the
 * food category as a prop to it.
 *
 * use api to make the call.. use state and useeffect
 */
"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { getAllFood } from "../api/foodmenu/routes"
import OrderDialog from "./ui/orderdialogue"
import { MenuItem } from "../lib/statismenu"

type Food = {
  id: number
  img: string
  dsc: string
  name: string
  price: number
  rate: number
  country: string
}

export default function FilteredFood({
  category,
}: {
  category: string | any
}): Promise<MenuItem[]> {
  const [food, setFood] = useState<Food[]>([])

  // store the food selected for ordering
  const [selectedFood, setSelectedFood] = useState<Food | null>(null)

  useEffect(() => {
    async function loadFood() {
      const foodData = await getAllFood(category)
      const api

      console.log("sorted food data", foodData)

      setFood(foodData)
    }

    loadFood()
  }, [category])

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {food.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="relative h-56 w-full">
              <Image
                src={item.img}
                alt={item.dsc}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-3 p-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>

                <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                  {item.dsc}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-green-600">
                  ₵{item.price}
                </span>

                <span className="rounded-full bg-yellow-100 px-2 py-1 text-sm font-medium text-yellow-700">
                  ⭐ {item.rate}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{item.country}</span>

                <button
                  onClick={() => setSelectedFood(item)}
                  className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
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
