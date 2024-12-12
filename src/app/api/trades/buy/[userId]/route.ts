import { prisma } from 'lib/prisma';
import { NextResponse } from 'next/server';

interface Params {
  userId: string;
}

export async function GET(_request: Request, params: { params: Promise<Params> }) {
  try {
    const resolvedParams = await params.params;

    const { userId } = resolvedParams;

    if (!userId) throw new Error('Failed to fetch coin data');

    const trades = await prisma.trades.findMany({
      where: {
        userId,
        tradeType: 'BUY',
      },
    });

    return NextResponse.json({ message: trades }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'erro', error: e }, { status: 500 });
  }
}
