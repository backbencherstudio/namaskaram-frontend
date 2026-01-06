"use client"

import React, { useEffect, useState } from 'react'
import { formatNumber } from '../SupplyOverView/SupplyOverView';

export default function HeroSection() {

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

    // const statsData = [
    //     {
    //         id: 1,
    //         title: "ESTIMATED BUYBACKS",
    //         value: "618,000 ASTER",
    //         subValue: "~ $1,854,000",
    //         accent: "white",
    //     },
    //     {
    //         id: 2,
    //         title: "KNOWN EMISSIONS",
    //         value: "250,000 ASTER",
    //         subValue: "Q4 2024",
    //         accent: "white",
    //     },
    //     {
    //         id: 3,
    //         title: "NET SUPPLY CHANGE",
    //         value: "-368,000 ASTER",
    //         subValue: "Supply is decreasing",
    //         accent: "gold",
    //     },
    //     {
    //         id: 4,
    //         title: "CIRCULATING SUPPLY",
    //         value: "45,750,000 ASTER",
    //         subValue: "Updated Dec 31, 12:56 PM",
    //         accent: "white",
    //     },
    // ];

     const statsData = [
    {
      id: 1,
      title: "PRICE",
      value: loading ? "Loading..." : `$${data?.price?.toLocaleString()}`,
      subValue: "Live from CoinGecko",
      accent: "white",
    },
    {
      id: 2,
      title: "MARKET CAP",
      value: loading ? "Loading..." : `$${data?.marketCap?.toLocaleString()}`,
      subValue: "USD Market Cap",
      accent: "white",
    },
    {
      id: 3,
      title: "24H CHANGE",
      value: loading ? "Loading..." : `${data?.change24h?.toFixed(2)}%`,
      subValue: "Last 24 hours",
      accent: "gold",
    },
    {
      id: 4,
      title: "CIRCULATING SUPPLY",
      value: loading
        ? "Loading..."
        : `${formatNumber(data?.circulatingSupply)} ASTER`,
      subValue: data?.lastUpdated
        ? `Updated ${new Date(data.lastUpdated).toLocaleString()}`
        : "",
      accent: "white",
    },
  ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-6">
            {statsData.map((item) => (
                <div
                    key={item.id}
                    className=" bg-[#030303] md:p-8 p-6 flex flex-col gap-4"
                >
                    <p className="lg:text-2xl md:text-xl text-lg font-medium leading-[150%] text-[#999]">
                        {item.title}
                    </p>
                    <h2
                        className={`lg:text-[64px] md:text-[48px] text-[32px] font-medium leading-[130%] ${item.accent === "gold"
                            ? "text-[#C99F6F]"
                            : "text-white"
                            }`}
                    >
                        {item.value}
                    </h2>

                    <p className={`lg:text-xl md:text-lg text-base leading-[150%] font-extralight text-[#999] ${item.accent === "gold"
                        ? "text-[#EFBE84]"
                        : "text-[#999]"
                        } `}>
                        {item.subValue}
                    </p>
                </div>
            ))}
        </div>
    )
}
