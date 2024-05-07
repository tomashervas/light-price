import Link from "next/link"
import PriceChart from "../components/PriceChart"
import PriceBars from "../components/PriceBars"
import { getPriceToday } from "@/lib/getData"
import { assert } from "console"
import Resume from "../components/Resume"
import { format } from 'date-fns';
import {es} from 'date-fns/locale';
import Footer from "../components/Footer"

export const dynamic = 'force-dynamic'

const TomorrowPage = async () => {
  const pricesTomorrow = await getPriceToday(false, true)
  const date = new Date()
  const tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000)
  const formatedDate = format(tomorrow, 'EEEE, d \'de\' MMMM', { locale: es })
  const capitalizedFormatedDate = formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1)

  return (
    <main className="flex min-h-screen flex-col container mx-auto">
      <div className="flex justify-between items-center p-2">
      <div className="p-4">
          <h1 className="text-xl font-bold">Precio de la luz mañana</h1>
          <h2 className=" font-semibold">{capitalizedFormatedDate}</h2>
        </div>
        <Link href={"/"} className="px-4 py-1 border border-violet-800 rounded-full">Hoy</Link>
      </div>
      { pricesTomorrow.length > 0 ?
          <div>
              <Resume data={pricesTomorrow} isToday={false}/>
              <PriceChart data={pricesTomorrow}  />
              <PriceBars data={pricesTomorrow} />
          </div> :
              <h1 className="text-xl p-12 flex-1 mt-20">No hay datos de mañana todavía, se publican a partir de las 20:30</h1>
      }
      <Footer />
    </main>
  )
}
export default TomorrowPage