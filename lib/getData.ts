const baseUrl = "https://apidatos.ree.es"


export const getPriceToday = async (isToday: boolean = true, peninsula: boolean = true) => {
    const idZone = peninsula ? 8741 : 8744
    const date = new Date()
    const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    const tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000)
    const tomorrowDate = `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`
    const res = await fetch(`${baseUrl}/es/datos/mercados/precios-mercados-tiempo-real?start_date=${isToday ? today : tomorrowDate}T00:00&end_date=${isToday ? today : tomorrowDate}T23:59&time_trunc=hour&geo_limit=ccaa&geo_ids=${idZone}`)
    const data = await res.json()
    if (!data.included) return []
    const prices = data.included[0].attributes.values
    const pricesTime = prices.map((p: any) => {
      const time = new Date(p.datetime).getHours()
      const price = (p.value / 1000).toFixed(3)
      return { time, price }
    })
    return pricesTime
  }