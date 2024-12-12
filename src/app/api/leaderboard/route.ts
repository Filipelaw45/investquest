import { prisma } from 'lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const leaderboard = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        Wallet: {
          select: {
            balance: true,
          },
        },
      },
      orderBy: {
        Wallet: {
          balance: 'desc',
        },
      },
    });

    return NextResponse.json(leaderboard, { status: 200 });
  } catch (e) {
    console.log({ e });
    return NextResponse.json({ message: 'erro', e });
  }
}
