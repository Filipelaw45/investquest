import { prisma } from 'lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { userId, symbol, quantity } = await req.json();

    const fee = 1.5;

    const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');

    if (!response.ok) {
      throw new Error('Failed to fetch coin data');
    }

    const coin: { symbol: string; price: string } = await response.json();

    const totalCost = Number(coin.price) * quantity;

    const trade = await prisma.trades.create({
      data: {
        userId,
        symbol,
        buyPrice: Number(coin.price),
        quantity,
        totalCost: totalCost,
        fee,
        tradeType: 'BUY',
        profitOrLoss: 0,
      },
    });

    return NextResponse.json({ message: trade }, { status: 200 });
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: 'success' });
}
