import { auth } from 'lib/auth';
import { redirect } from 'next/navigation';
import Form from './pageconfig';
import Footer from '@/components/Footer';
import HeaderLogged from '@/components/HeaderLogged';

export default async function Trades() {
  const session = await auth();
  if (!session) {
    redirect('/');
  }
  const userId = session?.user.id;

  if (!userId) {
    console.error('User ID não encontrado na sessão.');
    console.log(userId);
  }
  return (
    <>
      <HeaderLogged />
      <Form userId={userId} />
      <Footer></Footer>
    </>
  );
}
