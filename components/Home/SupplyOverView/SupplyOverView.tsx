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
        <div>
            <ChartRadialStacked />
        </div>
    )
}

