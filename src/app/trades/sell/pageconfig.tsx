"use client"
import CandleChart from '@/components/CandleChart';
import { SellList } from '@/components/SellList';
import { MyTradesList } from '@/components/TradeList';
import { useEffect, useState } from 'react';
import { useAlertTrade } from 'store/useTradeStore';

interface Trade {
  id: string;
  symbol: string;
  buyPrice: number;
  sellPrice: number;
  quantity: number;
  fee: number;
  totalCost: number;
  profitOrLoss: number;
  createdAt: string;
}

interface FormProps {
  userId: string;
}

const Sell: React.FC<FormProps> = ({ userId }) => {
  const [symbol, setSymbol] = useState('BTCUSDT');
  const [myTrades, setMyTrades] = useState<Trade[]>([]);
  const [myBuyTrades, setBuyMyTrades] = useState<Trade[]>([]);

  const { dialogOpen } = useAlertTrade();

  const myTradesData = async (): Promise<Trade[] | null> => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/trades/sell/${userId}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data.message || [];
    } catch (error) {
      console.error('Erro ao buscar trades:', error);
      return [];
    }
  };

  useEffect(() => {
    const fetchTrades = async () => {
      const data = await myTradesData();
      if (data) setMyTrades(data);
    };

    if (userId) {
      fetchTrades();
    }
  }, [userId, dialogOpen]);

  const myBuyData = async (): Promise<Trade[] | null> => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/trades/buy/${userId}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data.message || [];
    } catch (error) {
      console.error('Erro ao buscar trades:', error);
      return [];
    }
  };

  useEffect(() => {
    const fetchTrades = async () => {
      const data = await myBuyData();
      if (data) setBuyMyTrades(data);
    };

    if (userId) {
      fetchTrades();
    }
  }, [userId, dialogOpen]);

  return (
    <main className="w-full px-10 flex">
      <CandleChart
        symbol={symbol}
        title={
          symbol === 'SOLUSDT' ? 'SOLANA (SOL/USDT)' : 'BITCOIN (BTC/USDT)'
        }
      />
      <section className="ml-8 w-full">
        <div>
          <label htmlFor="symbol" className="block text-sm font-medium">
            Criptomoeda
          </label>
          <select
            id="symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="BTCUSDT">BITCOIN</option>
            <option value="SOLUSDT">SOLANA</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-4">Vender</h2>
            <div>
              <SellList trades={myBuyTrades} />
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-4">Minhas Trades</h2>
            <MyTradesList trades={myTrades} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sell;
