import { hash } from 'bcrypt';
import { prisma } from 'lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });

    await prisma.wallet.create({
      data:{
        userId: user.id,
      }
    })
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: 'success' });
}
