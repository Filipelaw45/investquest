import { prisma } from 'lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(_request: Request, { params }: { params: { userId: string } }) {
  try {
    const { userId } = params;

    if (!userId) throw new Error('Failed to fetch coin data');

    const trades = await prisma.trades.findMany({
      where: {
        userId,
        tradeType: 'SELL',
      },
    });

    return NextResponse.json({ message: trades }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'erro', error: e }, { status: 500 });
  }
}
