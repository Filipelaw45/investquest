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

export const MyTradesList = ({ trades }: { trades: Trade[] }) => {
  if (!trades || trades.length === 0) {
    return <p className='text-gray-500'>Nenhum trade encontrado.</p>;
  }

  return (
    <div className='container mx-auto p-4'>
      <div className='grid gap-4'>
        {trades
          .map((trade) => (
            <div
              key={trade.id}
              className='bg-white shadow-md rounded-lg p-4 border border-gray-200'
            >
              <div className='flex justify-between items-center'>
                <h2 className='text-lg font-semibold text-gray-800'>{trade.symbol}</h2>
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${
                    trade.profitOrLoss > 0
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {trade.profitOrLoss > 0 ? 'lucro ' : 'perda '}
                  {trade.profitOrLoss.toFixed(2)}
                </span>
              </div>
              {trade && (
                <div className='text-sm text-gray-600'>
                  <p>
                    <strong>Preço de compra:</strong> ${trade.buyPrice.toFixed(2)}
                  </p>
                  <p>
                    <strong>Preço de venda:</strong> ${trade ? trade.sellPrice.toFixed(2) : 0}
                  </p>
                  <p>
                    <strong>Quantidade:</strong> {trade.quantity}
                  </p>
                  <p>
                    <strong>Custo Total:</strong> ${trade.totalCost.toFixed(2)}
                  </p>
                  <p>
                    <strong>Lucro Total:</strong> ${(trade.sellPrice - trade.buyPrice).toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};
