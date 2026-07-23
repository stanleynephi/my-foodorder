/** get all the food items from the api */
const Api_Url = "https://free-food-menus-api-two.vercel.app"

// Categories this external API actually supports.
// Anything outside this list has no matching endpoint and will 404.
const SUPPORTED_API_CATEGORIES = new Set([
  "bbqs",
  "best-foods",
  "breads",
  "burgers",
  "chocolates",
  "desserts",
  "drinks",
  "fried-chicken",
  "ice-cream",
  "pizzas",
  "porks",
  "sandwiches",
  "sausages",
  "steaks",
])

export const getAllFood = async (category: string) => {
  const normalized = category.toLowerCase()

  // Skip the network call entirely for categories the API doesn't have
  // (e.g. "Rice", "Chicken Stew", "Soup" — these only exist in staticMenuItems.ts)
  if (!SUPPORTED_API_CATEGORIES.has(normalized)) {
    console.warn(
      `"${category}" isn't a category on the external food API — skipping fetch, using static items only.`,
    )
    return []
  }

  try {
    const response = await fetch(`${Api_Url}/${normalized}`)

    if (!response.ok) {
      console.warn(
        `Food API returned ${response.status} for category: ${category}`,
      )
      return []
    }

    return await response.json()
  } catch (err) {
    console.error(`Network error fetching category "${category}":`, err)
    return []
  }
}
