import Image from "next/image"

type Food = {
  id: string
  img: string
  name: string
  price: number
  dsc: string
}

interface FoodCardProps {
  food: Food
}

export default function FoodCard({ food }: FoodCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <div className="relative h-60 w-full">
        <Image
          src={food.img}
          alt={food.name}
          loading={"lazy"}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{food.name}</h3>
        <p className="text-red-600 font-bold mt-2">GHS {food.price}</p>
      </div>
    </div>
  )
}
