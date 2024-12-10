'use client';

import CandleChart from '@/components/CandleChart';
import { useEffect, useState } from 'react';
import { TradesList } from './TradeList';

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

  const myTradesData = async (): Promise<Trade[] | null> => {
    try {
      const response = await fetch(`http://localhost:3000/api/trades/sell/${userId}`);
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

    fetchTrades();
  }, [userId]);

  return (
    <main className='w-full px-10 flex'>
      <CandleChart
        symbol={symbol}
        title={symbol === 'SOLUSDT' ? 'SOLANA (SOL/USDT)' : 'BITCOIN (BTC/USDT)'}
      />
      <section className='ml-8 w-full'>
        <div>
          <label htmlFor='symbol' className='block text-sm font-medium'>
            Criptomoeda
          </label>
          <select
            id='symbol'
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className='border rounded p-2 w-full'
          >
            <option value='BTCUSDT'>BITCOIN</option>
            <option value='SOLUSDT'>SOLANA</option>
          </select>
        </div>
        <div className='mt-6'>
          <h2 className='text-xl font-semibold mb-4'>Minhas Trades</h2>
          <TradesList trades={myTrades} />
        </div>
      </section>
    </main>
  );
};

export default Sell;
