import Link from "next/link";
import ButtonTitle from "./components/ButtonTitle";
import PriceBars from "./components/PriceBars";
import PriceChart from "./components/PriceChart";
import { getPriceToday } from "@/lib/getData";
import Resume from "./components/Resume";
import { format } from 'date-fns';
import {es} from 'date-fns/locale';

export default async function Home() {
  const pricesToday = await getPriceToday(true, true)
  const date = new Date()
  const formatedDate = format(date, 'EEEE, d \'de\' MMMM', { locale: es })
  const capitalizedFormatedDate = formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1)

  return (
    <main className="flex min-h-screen flex-col container mx-auto">
      <div className="flex justify-between items-center p-2">
        <div className="p-4">
          <h1 className="text-xl font-bold">Precio de la luz hoy</h1>
          <h2 className=" font-semibold">{capitalizedFormatedDate}</h2>
        </div>
        <Link href={"/tomorrow"} className="px-4 py-1 border border-violet-800 rounded-full">Mañana</Link>
      </div>
      <Resume data={pricesToday} isToday/>
      <PriceChart data={pricesToday}  />
      <PriceBars data={pricesToday} />
    </main>
  );
}
