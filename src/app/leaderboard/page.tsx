import { auth } from 'lib/auth';
import { redirect } from 'next/navigation';
import Footer from '@/components/Footer';
import HeaderLogged from '@/components/HeaderLogged';
import Leaderboard from '@/components/Leaderboard';

export default async function Trades() {
  const session = await auth();
  if (!session) {
    redirect('/');
  }

  return (
    <>
      <HeaderLogged />
      <Leaderboard />
      <Footer></Footer>
    </>
  );
}
