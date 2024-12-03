import { auth } from 'lib/auth';
import Form from './form';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();
  if (session) {
    redirect('/');
  }
  return <Form />;
}
