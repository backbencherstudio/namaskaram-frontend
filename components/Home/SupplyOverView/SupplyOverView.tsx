"use client"

import React from 'react'


import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

export const description = "A radial chart with stacked sections"

const chartData = [{ month: "january", supply: 1260, emitted: 570, buybacks: 340 }]

const chartConfig = {
    supply: {
        label: "supply",
        color: "#D9D9D9",
    },
    emitted: {
        label: "emitted",
        color: "#043732",
    },
    buybacks: {
        label: "buybacks",
        color: "#EFBE84",
    },
} satisfies ChartConfig

function ChartRadialStacked() {
    const totalVisitors = chartData[0].supply + chartData[0].emitted

    return (
        <div>
            <div className="flex flex-1 items-center pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-full max-w-[248px]"
                >
                    <RadialBarChart
                        data={chartData}
                        endAngle={360}
                        innerRadius={95}
                        outerRadius={180}
                    >
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) - 15}
                                                    className="fill-[#999] md:text-[20px] text-base font-light leading-[150%]"
                                                >
                                                    Total Supply
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 15}
                                                    className="fill-[#EFBE84] md:text-[20px] text-base font-light leading-[150%] "
                                                >
                                                    {totalVisitors.toLocaleString()}ASTER
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                        <RadialBar
                            dataKey="supply"
                            stackId="a"
                            cornerRadius={10}
                            fill="var(--color-supply)"
                            stroke="#0A0A0A"
                            strokeWidth={8}
                        />

                        <RadialBar
                            dataKey="emitted"
                            stackId="a"
                            cornerRadius={10}
                            fill="var(--color-emitted)"
                            stroke="#0A0A0A"
                            strokeWidth={8}
                        />

                        <RadialBar
                            dataKey="buybacks"
                            stackId="a"
                            cornerRadius={10}
                            fill="var(--color-buybacks)"
                            stroke="#0A0A0A"
                            strokeWidth={8}
                        />
                    </RadialBarChart>
                </ChartContainer>
            </div>
        </div>
    )
}

export default function SupplyOverView() {
    return (
        <div className="bg-[#030303] lg:p-[80px] md:p-[60px] p-10">
            <div className='flex lg:flex-row flex-col gap-[100px] lg:items-center max-w-[924px]'>
                <div className='shrink-0 w-[260px] h-[260px] mx-auto lg:mx-0'>
                    <ChartRadialStacked />
                </div>

                <div className="flex items-start justify-between gap-10 flex-1">
                    {/* Left: legend dots + labels */}
                    <div className="space-y-5">
                        {supplyStats.map((item) => (
                            <div key={item.label} className="flex items-center gap-3">
                                <span
                                    className="h-2.5 w-2.5 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-white/80 text-sm">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right: values */}
                    <div className="space-y-5 text-right">
                        {supplyStats.map((item) => (
                            <span key={item.label} className="block text-white/80 text-sm">
                                {item.value}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
const supplyStats = [
    { label: "Circulating Supply", value: "45.75M ASTER", color: "#F2C94C" },
    { label: "Emitted (Q4)", value: "250.0K ASTER", color: "#2D9C93" },
    { label: "Buybacks (Q4)", value: "-618.0K ASTER", color: "#FFFFFF" },
];

