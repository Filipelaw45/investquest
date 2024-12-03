import ButtonLogout from "@/components/ButtonLogout";

export default async function HomePage() {
  return (
    <main className='flex items-center justify-center min-h-screen bg-gray-100'>
      <h1>Home Page com o usuário logado!</h1>
      <ButtonLogout />
    </main>
  );
}
