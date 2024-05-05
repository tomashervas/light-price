interface PriceBarsProps {
    data: any
}

const PriceBars = ({data}: PriceBarsProps) => {
  return (
    <div className="p-4">
        <h2 className="text-xl font-bold p-4">Precio por horas €/KWh</h2>
        <div>
            {data.map((d:any)=>{
                return (
                    <div key={d.time} className="flex items-center my-1 relative">
                        <div  className="text-sm rounded-md bg-violet-800 h-6" style={{width:`${d.price * 1000}px`}}></div>
                        <div className="text-sm absolute left-2">{d.time}h | {d.price}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
export default PriceBars