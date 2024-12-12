'use client';
import CandleChart from '@/components/CandleChart';
import { useState } from 'react';

interface FormProps {
  userId: string;
}

const Form: React.FC<FormProps> = ({ userId }) => {
  const [symbol, setSymbol] = useState('BTCUSDT');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');
  const [buyByAmount, setBuyByAmount] = useState(false); // Novo estado
  const [message, setMessage] = useState('');

  const fetchPrice = async (): Promise<number | null> => {
    try {
      const response = await fetch(
        `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
      );
      const data = await response.json();
      return parseFloat(data.price);
    } catch (error) {
      console.error('Erro ao buscar preço:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let cryptoQuantity = parseFloat(quantity);

    if (buyByAmount) {
      const price = await fetchPrice();
      if (!price) {
        setMessage('Erro ao obter o preço da criptomoeda.');
        return;
      }
      cryptoQuantity = parseFloat(amount) / price;
    }

    try {
      const response = await fetch('http://localhost:3000/api/trades/buy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          symbol,
          quantity: cryptoQuantity,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(
          `Compra realizada com sucesso! Você comprou ${cryptoQuantity.toFixed(
            8
          )} de ${symbol}.`
        );
      } else {
        setMessage(`Erro: ${data.message || 'Ocorreu um erro ao realizar a compra.'}`);
      }
    } catch (error) {
      setMessage('Erro ao realizar a trade.');
    }
  };

  return (
    <>
      <main className="w-full px-10 flex">
        <CandleChart
          symbol={symbol}
          title={symbol === 'SOLUSDT' ? 'SOLANA (SOL/USDT)' : 'BITCOIN (BTC/USDT)'}
        />
        <section className="w-full px-10">
          <h1>Realizar compra</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="symbol" className="block text-sm font-medium">
                Criptomoeda
              </label>
              <select
                id="symbol"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                className="border rounded p-2 w-full"
                required
              >
                <option value="BTCUSDT">BITCOIN</option>
                <option value="SOLUSDT">SOLANA</option>
              </select>
            </div>
            <div>
              <label htmlFor="buyType" className="block text-sm font-medium">
                Tipo de compra
              </label>
              <select
                id="buyType"
                onChange={(e) => setBuyByAmount(e.target.value === 'amount')}
                className="border rounded p-2 w-full"
              >
                <option value="quantity">Por Quantidade</option>
                <option value="amount">Por Valor (USD)</option>
              </select>
            </div>
            {!buyByAmount ? (
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium">
                  Quantidade
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="border rounded p-2 w-full"
                  min="0.0001"
                  step="0.0001"
                  required
                />
              </div>
            ) : (
              <div>
                <label htmlFor="amount" className="block text-sm font-medium">
                  Valor (USD)
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="border rounded p-2 w-full"
                  min="1" 
                  step="0.01"
                  required
                />
              </div>
            )}
            <button type="submit" className="bg-primary-blue text-white p-2">
              Realizar Compra
            </button>
          </form>
          {message && <p className="mt-4">{message}</p>}
        </section>
      </main>
    </>
  );
};

export default Form;
