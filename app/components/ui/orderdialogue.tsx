"use client"

import Image from "next/image"
import { useState } from "react"

type Food = {
  id: number
  name: string
  img: string
  price: number
}

type DeliveryOption = "normal" | "express"

const DELIVERY_FEES: Record<DeliveryOption, number> = {
  normal: 10,
  express: 15,
}

export default function OrderDialog({
  food,
  open,
  onClose,
}: {
  food: Food | null
  open: boolean
  onClose: () => void
}) {
  const [quantity, setQuantity] = useState(1)
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [delivery, setDelivery] = useState<DeliveryOption>("normal")

  if (!open || !food) return null

  const deliveryFee = DELIVERY_FEES[delivery]
  const subtotal = food.price * quantity
  const total = subtotal + deliveryFee

  async function placeOrder() {
    const order = {
      foodId: food.id,
      foodName: food.name,
      quantity,
      price: food.price,
      deliveryOption: delivery,
      deliveryFee,
      subtotal,
      total,
      address,
      phone,
    }

    try {
      const response = await fetch("/api/order", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(order),
      })

      if (response.ok) {
        alert("Order placed successfully")

        onClose()
      }
    } catch (error) {
      console.log(error)

      alert("Something went wrong")
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-md rounded-2xl border border-[#3a3327] bg-[#111111] p-6 shadow-xl">
        <h2 className="text-xl font-bold text-[#F3ECDD]">Confirm Order</h2>

        <div className="mt-4 flex gap-4">
          <Image
            src={food.img}
            width={100}
            height={100}
            alt={food.name}
            className="rounded-lg object-cover"
          />

          <div>
            <h3 className="font-semibold text-[#F3ECDD]">{food.name}</h3>

            <p className="font-bold text-[#C9A227]">${food.price}</p>
          </div>
        </div>

        {/* Quantity */}

        <div className="mt-5 flex items-center gap-4">
          <span className="font-semibold text-[#F3ECDD]">Quantity:</span>

          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="rounded bg-[#1a1a1a] px-3 py-1 text-[#F3ECDD] hover:bg-[#242424]"
          >
            -
          </button>

          <span className="font-bold text-[#F3ECDD]">{quantity}</span>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="rounded bg-[#1a1a1a] px-3 py-1 text-[#F3ECDD] hover:bg-[#242424]"
          >
            +
          </button>
        </div>

        {/* Delivery option */}

        <div className="mt-5">
          <span className="font-semibold text-[#F3ECDD]">Delivery:</span>

          <div className="mt-2 flex gap-3">
            <button
              onClick={() => setDelivery("normal")}
              className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                delivery === "normal"
                  ? "border-[#C9A227] bg-[#C9A227] text-black"
                  : "border-[#3a3327] text-[#F3ECDD] hover:bg-[#1a1a1a]"
              }`}
            >
              Normal — ₵10
            </button>

            <button
              onClick={() => setDelivery("express")}
              className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                delivery === "express"
                  ? "border-[#C9A227] bg-[#C9A227] text-black"
                  : "border-[#3a3327] text-[#F3ECDD] hover:bg-[#1a1a1a]"
              }`}
            >
              Express — ₵15
            </button>
          </div>
        </div>

        {/* Delivery Information */}

        <div className="mt-5 space-y-3">
          <input
            type="text"
            placeholder="Delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full rounded border border-[#3a3327] bg-[#0a0a0a] p-2 text-[#F3ECDD] placeholder:text-[#6b655a] focus:border-[#C9A227] focus:outline-none"
          />

          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded border border-[#3a3327] bg-[#0a0a0a] p-2 text-[#F3ECDD] placeholder:text-[#6b655a] focus:border-[#C9A227] focus:outline-none"
          />
        </div>

        {/* Totals breakdown */}

        <div className="mt-5 space-y-1 border-t border-[#3a3327] pt-4 text-sm">
          <div className="flex justify-between text-[#8a8378]">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-[#8a8378]">
            <span>Delivery ({delivery})</span>
            <span>₵{deliveryFee}</span>
          </div>
          <div className="flex justify-between pt-1 text-lg font-bold text-[#F3ECDD]">
            <span>Total</span>
            <span>₵{total}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg bg-[#1a1a1a] px-4 py-2 text-[#F3ECDD] hover:bg-[#242424]"
          >
            Cancel
          </button>

          <button
            onClick={placeOrder}
            className="rounded-lg bg-[#C9A227] px-4 py-2 font-semibold text-black hover:opacity-90"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}
