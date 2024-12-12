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

export const SellList = ({ trades }: { trades: Trade[] }) => {
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
                <button className={`px-2 py-1 rounded-full text-sm font-medium bg-green-500 `}>Vender</button>
              </div>
              {trade && (
                <div className='text-sm text-gray-600'>
                  <p>
                    <strong>Preço de compra:</strong> ${trade.buyPrice.toFixed(2)}
                  </p>
                  <p>
                    <strong>Quantidade:</strong> {trade.quantity}
                  </p>
                  <p>
                    <strong>Custo Total:</strong> ${trade.totalCost.toFixed(2)}
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
