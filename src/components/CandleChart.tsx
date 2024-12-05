"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface CandleChartProps {
  symbol: string;
  title: string;
}

const CandleChart: React.FC<CandleChartProps> = ({ symbol, title }) => {
  const [currency, setCurrency] = useState<"USD" | "BRL">("USD");
  const [exchangeRate, setExchangeRate] = useState<number>(1);
  const [chartData, setChartData] = useState<{
    series: { data: { x: Date; y: number[] }[] }[];
    options: ApexOptions;
  }>({
    series: [{ data: [] }],
    options: {
      chart: { type: "candlestick", height: 350 },
      title: { text: title, align: "left" },
      xaxis: { type: "datetime" },
      yaxis: { tooltip: { enabled: true } },
    },
  });

  const [price, setPrice] = useState<number | null>(null);
  const [priceChange, setPriceChange] = useState<number | null>(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      if (currency === "BRL") {
        try {
          const response = await axios.get(
            "https://open.er-api.com/v6/latest/USD"
          );
          setExchangeRate(response.data.rates.BRL || 1);
        } catch (error) {
          console.error("Erro ao buscar taxa de câmbio:", error);
        }
      } else {
        setExchangeRate(1);
      }
    };

    fetchExchangeRate();
  }, [currency]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const candleResponse = await axios.get(
          "https://api.binance.com/api/v3/klines",
          { params: { symbol, interval: "1m", limit: 50 } }
        );

        const formattedData = candleResponse.data.map((candle: any[]) => ({
          x: new Date(candle[0]),
          y: [candle[1], candle[2], candle[3], candle[4]].map(Number),
        }));

        setChartData((prevState) => ({
          ...prevState,
          series: [{ data: formattedData }],
        }));

        const tickerResponse = await axios.get(
          "https://api.binance.com/api/v3/ticker/24hr",
          { params: { symbol } }
        );

        const lastPrice = parseFloat(tickerResponse.data.lastPrice);
        const priceChangePercent = parseFloat(
          tickerResponse.data.priceChangePercent
        );

        setPrice(lastPrice);
        setPriceChange(priceChangePercent);
      } catch (error) {
        console.error(`Erro ao buscar dados para ${symbol}:`, error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <label htmlFor="currency" className="font-semibold text-lg">
          Moeda:
        </label>
        <select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value as "USD" | "BRL")}
          className="p-2 border rounded"
        >
          <option value="USD">USD (Dólar)</option>
          <option value="BRL">BRL (Real)</option>
        </select>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        {price !== null && priceChange !== null ? (
          <div>
            <p className="text-xl">
              Valor atual:{" "}
              <span className="font-bold">
                {currency === "BRL" ? "R$" : "$"}
                {(
                  price * (currency === "BRL" ? exchangeRate : 1)
                ).toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </p>
            <p
              className={`text-lg font-semibold ${
                priceChange >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              Variação: {priceChange > 0 ? "+" : ""}
              {priceChange.toFixed(2)}%
            </p>
          </div>
        ) : (
          <p>Carregando dados...</p>
        )}
      </div>

      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="candlestick"
        height={350}
        width={500}
      />
    </div>
  );
};

export default CandleChart;
