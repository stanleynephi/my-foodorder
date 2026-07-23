"use client"

import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"

import { getAllFood } from "../api/foodmenu/routes"
import FoodCard from "./ui/foodcard"

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

/** make an api call and then pass the data into a card */
export default function FoodCarousel() {
  const [foods, setfood] = useState<Food[]>([])

  //set up the embla carousel
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 3,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  )

  //set up useEffect to call the api and then pass the data to the food state
  useEffect(() => {
    async function loadFood() {
      const foodData = staticMenuItems

      //get the data and then slice up to index 10
      setfood(foodData.slice(0, 6))
    }

    loadFood()
  }, [])

  return (
    <section className="bg-black py-14">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#C9A227]">
          FAN FAVORITES
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-[#F3ECDD] sm:text-3xl">
          What people are ordering
        </h2>
      </div>

      <div className="relative mt-8">
        {/* fade edges so the auto-scroll reads as continuous, not cut off */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent" />

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4 px-4">
            {foods.map((food) => (
              <div
                key={food.id}
                className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_25%]"
              >
                <FoodCard food={food} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
