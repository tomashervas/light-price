"use client"
import { Area, AreaChart, CartesianGrid, Label, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"


interface PriceChartProps {
    data: any
}

function CustomTooltip({ payload, label, active } : any) {
    if (active) {
      return (
        <div className="bg-gray-800/40 p-3 rounded-lg">
          <p className="text-sm">{`${label}h | ${payload[0].value} `}<span className="text-xs">€/kWh</span></p>
        </div>
      );
    }
}

const PriceChart = ({data}: PriceChartProps) => {
    const maxPrice = Math.max(...data.map((d:any) => d.price))
    const maxYaxis = maxPrice > .25 ? maxPrice : .25
    return (
            <ResponsiveContainer width={"100%"} height={300} >
                <AreaChart data={data}
                    margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#5b21b6" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#5b21b6" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="time" fontSize={13}>
                        <Label value="Horas" position="top" />
                    </XAxis>
                    <YAxis fontSize={13} label={{ value: "€/kWh", angle: -90, position: "insideLeft" }} domain={[0, maxYaxis]}/>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <Tooltip content={<CustomTooltip />} />
                    {/* <Tooltip label={"Horas"} wrapperStyle={{ fontSize: 12, color: "#5b21b6", backgroundColor: "black" }} /> */}
                    <Area type="monotone" dataKey="price" stroke="#5b21b6" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
    )
}
export default PriceChart