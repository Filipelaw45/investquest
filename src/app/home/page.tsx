import ButtonLogout from '@/components/ButtonLogout';
import { redirect } from 'next/navigation';
import { auth } from '../../lib/auth';

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect('/');
  }

  return (
    <main>
      <div>Olá {session?.user.name}</div>
      <ButtonLogout />
    </main>
  );
}
