import PriceBars from "./components/PriceBars";
import PriceChart from "./components/PriceChart";

const getPriceToday = async (isToday = true)=> {
  const date = new Date()
  const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  const tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000)
  const tomorrowDate = `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`
  console.log(tomorrowDate)
  const res = await fetch(`https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${isToday ? today : tomorrow}T00:00&end_date=${isToday ? today : tomorrow}T23:59&time_trunc=hour`)
  const data = await res.json()
  const prices = data.included[0].attributes.values
  const pricesTime = prices.map((p:any)=>{
  const time = new Date(p.datetime).getHours()
  const price = (p.value / 1000).toFixed(3)
  return { time,price }
})

  return pricesTime

}
export default async function Home() {
  const data = await getPriceToday(true)
  console.log(data)
  

  return (
    <main className="flex min-h-screen flex-col container mx-auto">
      <h1 className="text-xl font-bold p-4">Precio de la luz hoy</h1>
      <PriceChart data={data}/>
      <PriceBars data={data}/>
    </main>
  );
}
