interface ResumeProps {
    data: any,
    isToday: boolean
}


const Resume = ( {data, isToday}: ResumeProps) => {
    const hour = new Date().getHours()
    const actualPrice = data.find( (d:any)=>+d.time===hour)
    const minPrice = Math.min(...data.map((d:any) => d.price))
    const maxPrice = Math.max(...data.map((d:any) => d.price))
    const minDayPrice = Math.min(...data.filter((d:any)=>d.time>=8 && d.time<=20).map((d:any) => d.price))
    const minTime  = data.find((d: any)=>+d.price===minPrice)
    const minDayTime = data.find((d:any)=>+d.price===minDayPrice)
    const maxTime  = data.find((d:any)=>+d.price===maxPrice)
    console.log(hour)
    return (
    <div className="p-4 mx-4 mb-8 border border-slate-500 rounded-lg">
        { isToday && <p>Precio actual: {actualPrice.price} <span className="text-sm">€/kWh</span></p>}
        <p>Hora más barata: {minTime.time}h | {minTime.price} <span className="text-sm">€/kWh</span> </p>
        <p>Hora diurna más barata: {minDayTime.time}h | {minDayTime.price} <span className="text-sm">€/kWh</span></p>
        <p>Hora más cara: {maxTime.time}h | {maxTime.price} <span className="text-sm">€/kWh</span></p>
    </div>
  )
}
export default Resume