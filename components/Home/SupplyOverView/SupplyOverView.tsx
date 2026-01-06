"use client";

import { useEffect, useState } from "react";
import ChartRadialStacked from "./SupplyOverviewChart";


export default function SupplyOverView() {



    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    console.log(data)

    useEffect(() => {
        async function fetchStats() {
            try {
                const res = await fetch("/api/aster");
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchStats();
    }, []);

    const supplyStats = [
        {
            label: "Circulating Supply",
            value: loading
                ? "Loading..."
                : `${formatNumber(data?.circulatingSupply)} ASTER`,
            color: "#EFBE84",
        }, ,
        { label: "Emitted (Q4)", value: "- ", color: "#2D9C93" },
        { label: "Buybacks (Q4)", value: "- ", color: "#FFFFFF" },
    ];

    return (
        <div className="bg-[#030303] lg:p-[80px] md:p-[60px] p-5">
            <div className='max-w-[924px] mx-auto'>
                <h2 className='text-white  lg:mb-12 mb-6 md:mb-8 lg:text-[32px] md:text-[28px] text-2xl font-medium leading-[150%]'>Supply Overview</h2>
                <div className='flex lg:flex-row flex-col lg:gap-[100px] gap-10 lg:items-center  '>
                    <div className='shrink-0 w-[260px] h-[260px] mx-auto lg:mx-0'>
                        <ChartRadialStacked
                            circulating={data?.circulatingSupply || 0}
                            totalSupply={data?.totalSupply || 0}
                            emitted={0}
                            buybacks={0}
                        />
                    </div>

                    <div className="flex items-start justify-between gap-10 flex-1">
                        {/* Left: legend dots + labels */}
                        <div className="flex flex-col gap-6">
                            {supplyStats.map((item) => (
                                <div key={item.label} className="flex items-center gap-3">
                                    <span
                                        className="h-3 w-3 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <span className="text-[#999] lg:text-xl md:text-lg text-base leading-[150%] font-normal">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Right: values */}
                        <div className="flex flex-col gap-6">
                            {supplyStats.map((item) => (
                                <span key={item.label} className=" text-[#999] lg:text-xl md:text-lg text-base leading-[150%] font-normal">
                                    {item.value}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export function formatNumber(num: number) {
    if (!num) return "0";
    if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(2)}B`;
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(2)}M`;
    if (num >= 1_000) return `${(num / 1_000).toFixed(2)}K`;
    return num.toFixed(0);
}
