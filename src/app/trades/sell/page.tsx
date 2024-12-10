import { auth } from 'lib/auth';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sell from './pageconfig';

export default async function Trades() {
  const session = await auth();
  if (!session) {
    redirect('/');
  }
  const userId = session?.user.id;
  return (
    <>
      <Header></Header>
      <Sell userId={userId} />
      <Footer></Footer>
    </>
  );
}
