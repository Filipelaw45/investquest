'use client';
import { useState } from 'react';
import { useAlertTrade } from 'store/useTradeStore';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

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
	const [dialogMessage, setDialogMessage] = useState<string | null>(null);

	const { dialogOpen, setDialogOpen } = useAlertTrade();

	const handleSell = async (tradeId: string) => {
		try {
			const response = await fetch('http://localhost:3000/api/trades/sell', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ tradeId }),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || 'Erro ao processar a venda.');
			}

			const result = await response.json();

			setDialogMessage(
				`Venda realizada com sucesso! Lucro/Prejuízo: ${result.message.profitOrLoss}`
			);
		} catch (error: any) {
			console.error(error);
			setDialogMessage(`Erro ao vender: ${error.message}`);
		} finally {
			setDialogOpen(true);  // Isso abre o modal corretamente
		}
	};

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
								<h2 className='text-lg font-semibold text-gray-800'>
									{trade.symbol}
								</h2>
								<button
									className='px-2 py-1 rounded-full text-sm font-medium bg-green-500 text-white'
									onClick={() => handleSell(trade.id)}
								>
									Vender
								</button>
							</div>
							{trade && (
								<div className='text-sm text-gray-600'>
									<p>
										<strong>Preço de compra:</strong> $ 
										{trade.buyPrice.toFixed(2)}
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

			<AlertDialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
				<AlertDialogTrigger asChild />
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Resultado da venda:</AlertDialogTitle>
						<AlertDialogDescription>{dialogMessage}</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogAction
							onClick={() => {
								setDialogOpen(false); // Fecha o modal ao clicar em "Continue"
							}}
						>
							Continue
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
};
