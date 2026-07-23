export interface MenuItem {
  id: string
  name: string
  price: number
  category: string
  description?: string
  img?: string
}

export const staticMenuItems: MenuItem[] = [
  // 1. Rice
  {
    id: "static-rice-1",
    name: "Rice with Salad & Chicken",
    price: 40,
    category: "rice",
    description: "Rice with salad, 1 drumstick of chicken and sauce",
    img: "https://picsum.photos/seed/rice-salad-chicken/600/400",
  },
  {
    id: "static-rice-2",
    name: "1 Cup of Rice",
    price: 20,
    category: "rice",
    img: "https://picsum.photos/seed/rice-cup/600/400",
  },
  {
    id: "static-rice-3",
    name: "5 Cups of Rice",
    price: 95, // 20 x 5 = 100, minus 5% discount = 95
    category: "rice",
    description: "5% discount applied",
    img: "https://picsum.photos/seed/rice-5cups/600/400",
  },

  // 2. Chicken Stew
  {
    id: "static-chicken-stew-small",
    name: "Chicken Stew - Small",
    price: 70,
    category: "stew",
    img: "https://picsum.photos/seed/chicken-stew/600/400",
  },
  {
    id: "static-chicken-stew-medium",
    name: "Chicken Stew - Medium",
    price: 90,
    category: "stew",
    img: "https://picsum.photos/seed/chicken-stew/600/400",
  },
  {
    id: "static-chicken-stew-large",
    name: "Chicken Stew - Large",
    price: 130,
    category: "stew",
    img: "https://picsum.photos/seed/chicken-stew/600/400",
  },

  // 3. Sausage Stew
  {
    id: "static-sausage-stew-small",
    name: "Sausage Stew - Small",
    price: 50,
    category: "stew",
    img: "https://picsum.photos/seed/sausage-stew/600/400",
  },
  {
    id: "static-sausage-stew-medium",
    name: "Sausage Stew - Medium",
    price: 70,
    category: "stew",
    img: "https://picsum.photos/seed/sausage-stew/600/400",
  },
  {
    id: "static-sausage-stew-large",
    name: "Sausage Stew - Large",
    price: 90,
    category: "stew",
    img: "https://picsum.photos/seed/sausage-stew/600/400",
  },

  // 4. Soup
  {
    id: "static-soup-1",
    name: "Light Soup",
    price: 100,
    category: "soup",
    img: "https://picsum.photos/seed/light-soup/600/400",
  },

  // 5. Assorted Noodles / Others
  {
    id: "static-noodles-1",
    name: "Assorted Noodles",
    price: 70,
    category: "noodles",
    img: "https://picsum.photos/seed/assorted-noodles/600/400",
  },
  {
    id: "static-noodles-2",
    name: "Assorted Spaghetti",
    price: 50,
    category: "noodles",
    img: "https://picsum.photos/seed/assorted-spaghetti/600/400",
  },
  {
    id: "static-noodles-3",
    name: "5 Balls of Banku",
    price: 20,
    category: "others",
    img: "https://picsum.photos/seed/banku/600/400",
  },
  {
    id: "static-noodles-4",
    name: "Sobolo",
    price: 5,
    category: "drinks",
    description: "Drink",
    img: "https://picsum.photos/seed/sobolo/600/400",
  },
]
