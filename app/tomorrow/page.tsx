import Link from "next/link"
import PriceChart from "../components/PriceChart"
import PriceBars from "../components/PriceBars"
import { getPriceToday } from "@/lib/getData"
import { assert } from "console"

const TomorrowPage = async () => {
  const pricesTomorrow = await getPriceToday(false, true)

  return (
    <main className="flex min-h-screen flex-col container mx-auto">
      <div className="flex justify-end p-2">
        <Link href={"/"} className="px-4 py-2 border border-violet-800 rounded-full">Hoy</Link>
      </div>
      { pricesTomorrow.length > 0 ?
          <div>
              <h1 className="text-xl font-bold p-4">Precio de la luz mañana</h1>
              <PriceChart data={pricesTomorrow}  />
              <PriceBars data={pricesTomorrow} />
          </div> :
              <h1 className="text-xl p-12 mt-20">No hay datos de mañana todavía, se publican a partir de las 20:30</h1>
      }
    </main>
  )
}
export default TomorrowPage