import { prisma } from 'lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { userId, symbol, quantity } = await req.json();

    if (!userId || !symbol || !quantity) {
      throw new Error('Campos obrigatórios estão ausentes');
    }

    const numericQuantity = Number(quantity);
    if (isNaN(numericQuantity) || numericQuantity <= 0) {
      throw new Error('Quantidade inválida');
    }

    console.log('Dados recebidos:', { userId, symbol, quantity: numericQuantity });

    const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);

    if (!response.ok) {
      throw new Error('Falha ao buscar dados da criptomoeda');
    }

    const coin: { symbol: string; price: string } = await response.json();

    const totalCost = Number(coin.price) * numericQuantity;

    const trade = await prisma.trades.create({
      data: {
        userId,
        symbol,
        buyPrice: Number(coin.price),
        quantity: numericQuantity,
        totalCost: totalCost,
        fee: 0.0,
        tradeType: 'BUY',
        profitOrLoss: 0,
      },
    });

    return NextResponse.json({ message: trade }, { status: 200 });
  } catch (e: any) {
    console.error('Erro ao processar a requisição:', e);
    return NextResponse.json(
      { message: 'Erro interno no servidor', error: e.message || 'Erro desconhecido' },
      { status: 500 }
    );
  }
}
