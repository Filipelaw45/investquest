import { prisma } from 'lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET({ params }: { params: { userId: string } }) {
  try {
    const { userId } = params;

    if (!userId) throw new Error('Failed to fetch coin data');

    const trades = await prisma.trades.findMany({
      where: {
        userId,
        tradeType: 'BUY',
      },
    });

    return NextResponse.json({ message: trades }, { status: 200 });
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: 'success' });
}
