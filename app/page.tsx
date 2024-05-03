import Link from "next/link";
import ButtonTitle from "./components/ButtonTitle";
import PriceBars from "./components/PriceBars";
import PriceChart from "./components/PriceChart";
import { getPriceToday } from "@/lib/getData";

export default async function Home() {
  const pricesToday = await getPriceToday(true, true)

  return (
    <main className="flex min-h-screen flex-col container mx-auto">
      <div className="flex justify-end p-2">
        <Link href={"/tomorrow"} className="px-4 py-2 border border-violet-800 rounded-full">Mañana</Link>
      </div>
      <h1 className="text-xl font-bold p-4 pt-0">Precio de la luz hoy</h1>
      <PriceChart data={pricesToday}  />
      <PriceBars data={pricesToday} />
    </main>
  );
}
