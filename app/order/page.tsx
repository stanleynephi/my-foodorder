/**this is the page where the food orders are being placed
 *there is a pagination on the page for the user to move between pages
 *user sees a panerl that helps them sort between meals they want to order
 */

import FilteredFood from "../components/filteredFood"
import Filterpanel from "../components/filterpanel"
import { getAllFood } from "../api/foodmenu/routes"
import Pagination from "../components/ui/pagination"
import { redirect } from "next/navigation"
import Header from "../components/header"
import Footer from "../components/footer"

export default async function Order(prop: {
  searchParams?: Promise<{
    category?: string | never
    page?: string
  }>
}) {
  const foodperpage = 30
  const searchParams = await prop.searchParams
  const currentcategory = searchParams?.category

  if (!searchParams?.category) {
    redirect("/order?category=rice")
  }

  //   const currentpage = Number(searchParams?.page) || 1

  // Get food based on category
  const foods = await getAllFood(currentcategory)

  // total number of pages
  const totalPages = Math.ceil(foods.length / foodperpage)

  console.log(currentcategory)
  return (
    <>
      <Header />
      <section>
        <Filterpanel searchParams={searchParams} />
        <FilteredFood category={currentcategory} />
      </section>
      <Footer />
    </>
  )
}
