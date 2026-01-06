
import { NextResponse } from "next/server";

export async function GET() {
    const apiKey = process.env.COINGECKO_API_KEY

    const COIN_ID = "aster-2"
    const url = `https://api.coingecko.com/api/v3/coins/${COIN_ID}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;

    const res = await fetch(url, {
        headers: {
            accept: "application/json",
            "x-cg-demo-api-key": apiKey || "",
        },
        next: { revalidate: 60 },
    })

    if (!res.ok) {
        return NextResponse.json({ error: "CoinGecko fetch failed" }, { status: 500 });
    }

    const data = await res.json();

      return NextResponse.json({
    price: data.market_data.current_price.usd,
    marketCap: data.market_data.market_cap.usd,
    circulatingSupply: data.market_data.circulating_supply,
    totalSupply: data.market_data.total_supply,
    maxSupply: data.market_data.max_supply,
    volume24h: data.market_data.total_volume.usd,
    change24h: data.market_data.price_change_percentage_24h,
    lastUpdated: data.last_updated,
  });

}