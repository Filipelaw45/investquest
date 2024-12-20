import { prisma } from 'lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { tradeId } = await req.json();

    const uniqueTrade = await prisma.trades.findUnique({
      where: {
        id: tradeId,
      },
    });

    const response = await fetch(
      `https://api.binance.com/api/v3/ticker/price?symbol=${uniqueTrade?.symbol}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch coin data');
    }

    if (!uniqueTrade) throw new Error('Failed to fetch coin data');

    const coin: { symbol: string; price: string } = await response.json();

    const profitOrLoss = Number(coin.price) * uniqueTrade.quantity - uniqueTrade.totalCost;

    const trade = await prisma.trades.update({
      where: {
        id: tradeId,
      },
      data: {
        sellPrice: Number(coin.price),
        tradeType: 'SELL',
        profitOrLoss,
      },
    });

    return NextResponse.json({ message: trade }, { status: 200 });
  } catch (e) {
    console.log({ e });
    return NextResponse.json({ message: 'erro', e });
  }
}
