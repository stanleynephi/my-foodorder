export interface MenuItem {
  id: string
  name: string
  price: number
  category: string
  dsc: string
  rate: number
  country: string
  img: string
}

export const staticMenuItems: MenuItem[] = [
  // 1. Rice
  {
    id: "static-rice-1",
    name: "Rice with Salad & Chicken",
    price: 40,
    category: "rice",
    dsc: "Rice with salad, 1 drumstick of chicken and sauce",
    rate: 0,
    country: "Ghana",
    img: "/images/rice.jpg",
  },
  {
    id: "static-rice-2",
    name: "1 Cup of Rice",
    price: 20,
    category: "rice",
    dsc: "",
    rate: 0,
    country: "Ghana",
    img: "/images/rice.jpg",
  },
  {
    id: "static-rice-3",
    name: "5 Cups of Rice",
    price: 95, // 20 x 5 = 100, minus 5% discount = 95
    category: "rice",
    dsc: "5% discount applied",
    rate: 0,
    country: "Ghana",
    img: "/images/rice.jpg",
  },

  // 2. Chicken Stew
  {
    id: "static-chicken-stew-small",
    name: "Chicken Stew - Small",
    price: 70,
    category: "stew",
    dsc: "",
    rate: 0,
    country: "Ghana",
    img: "/images/stew.jpg",
  },
  {
    id: "static-chicken-stew-medium",
    name: "Chicken Stew - Medium",
    price: 90,
    category: "stew",
    dsc: "",
    rate: 0,
    country: "Ghana",
    img: "/images/stew.jpg",
  },
  {
    id: "static-chicken-stew-large",
    name: "Chicken Stew - Large",
    price: 130,
    category: "stew",
    dsc: "",
    rate: 0,
    country: "Ghana",
    img: "/images/stew.jpg",
  },

  // 3. Sausage Stew
  {
    id: "static-okro-stew-small",
    name: "Okro Stew - Small",
    price: 50,
    category: "stew",
    dsc: "",
    rate: 0,
    country: "Ghana",
    img: "/images/okro.jpg",
  },
  {
    id: "static-okro-stew-medium",
    name: "Okro Stew - Medium",
    price: 70,
    category: "stew",
    dsc: "",
    rate: 0,
    country: "Ghana",
    img: "/images/okro.jpg",
  },
  {
    id: "static-okro-stew-large",
    name: "Okro Stew - Large",
    price: 90,
    category: "stew",
    dsc: "",
    rate: 0,
    country: "Ghana",
    img: "/images/okro.jpg",
  },

  // 4. Soup
  {
    id: "static-soup-1",
    name: "Light Soup",
    price: 100,
    category: "soup",
    dsc: "",
    rate: 0,
    country: "Ghana",
    img: "/images/lightsoup.jpg",
  },

  // 5. Assorted Noodles / Others
  {
    id: "static-noodles-1",
    name: "Assorted Noodles",
    price: 70,
    category: "noodles",
    dsc: "",
    rate: 0,
    country: "Ghana",
    img: "/images/noodles.jpg",
  },
  {
    id: "static-noodles-2",
    name: "Assorted Spaghetti",
    price: 50,
    category: "noodles",
    dsc: "",
    rate: 0,
    country: "Ghana",
    img: "/images/noodles.jpg",
  },
  {
    id: "static-noodles-3",
    name: "5 Balls of Banku",
    price: 20,
    category: "others",
    dsc: "",
    rate: 0,
    country: "Ghana",
    img: "/images/banku.jpg",
  },
  {
    id: "static-noodles-4",
    name: "Sobolo",
    price: 5,
    category: "drinks",
    dsc: "Drink",
    rate: 0,
    country: "Ghana",
    img: "/images/sobolo.jpg",
  },
]
