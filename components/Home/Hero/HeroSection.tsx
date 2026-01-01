import React from 'react'

export default function HeroSection() {

    const statsData = [
        {
            id: 1,
            title: "ESTIMATED BUYBACKS",
            value: "618,000 ASTER",
            subValue: "~ $1,854,000",
            accent: "white",
        },
        {
            id: 2,
            title: "KNOWN EMISSIONS",
            value: "250,000 ASTER",
            subValue: "Q4 2024",
            accent: "white",
        },
        {
            id: 3,
            title: "NET SUPPLY CHANGE",
            value: "-368,000 ASTER",
            subValue: "Supply is decreasing",
            accent: "gold",
        },
        {
            id: 4,
            title: "CIRCULATING SUPPLY",
            value: "45,750,000 ASTER",
            subValue: "Updated Dec 31, 12:56 PM",
            accent: "white",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {statsData.map((item) => (
                <div
                    key={item.id}
                    className="rounded-xl bg-gradient-to-b from-[#111111] to-[#0a0a0a] p-6 shadow-lg border"
                >
                    <p className="text-xs tracking-widest text-gray-400 mb-3">
                        {item.title}
                    </p>
                    <h2
                        className={`text-3xl font-semibold ${item.accent === "gold"
                            ? "text-[#d6b37c]"
                            : "text-white"
                            }`}
                    >
                        {item.value}
                    </h2>

                    <p className="text-sm text-gray-400 mt-2">
                        {item.subValue}
                    </p>
                </div>
            ))}
        </div>
    )
}
