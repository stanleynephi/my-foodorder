/**create a section using icons to ensure trust, reliabilty and customer relations */

import { Motorbike, Clock, Zap, Wallet } from "lucide-react"

export default function Trust() {
  return (
    <section className="bg-gray-200 py-20 mt-10">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 text-center">
        {/* Free Shipping */}
        <div className="flex flex-col items-center space-y-6">
          <Motorbike className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
          <p className="text-lg tracking-widest text-gray-800">
            Delivery Areas: UCC Campus & Amoamoma
          </p>
        </div>

        {/* Secure Payments */}
        <div className="flex flex-col items-center space-y-6">
          <Clock className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
          <p className="text-lg tracking-widest text-gray-800">
            Within 20 - 30 minutes
          </p>
        </div>

        {/* Customer Service */}
        <div className="flex flex-col items-center space-y-6">
          <Zap className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
          <p className="text-lg tracking-widest text-gray-800">
            10 - 15 minutes at an extra fee
          </p>
        </div>

        {/* Customer Service */}
        <div className="flex flex-col items-center space-y-6">
          <Wallet className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
          <p className="text-lg tracking-widest text-gray-800">
            Delivery Fee: 10 cedis
          </p>
        </div>
      </div>
    </section>
  )
}
