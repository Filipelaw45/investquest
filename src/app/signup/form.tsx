'use client';

import { FormEvent } from 'react';

export default function Form() {
  const loginPath = '/login'
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    });
  };
  return (
    <main className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold text-center'>Criar conta</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Nome
            </label>
            <input
              name='name'
              type='name'
              id='name'
              required
              className='block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              E-mail
            </label>
            <input
              name='email'
              type='email'
              id='email'
              required
              className='block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500'
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
              Senha
            </label>
            <input
              name='password'
              type='password'
              id='password'
              required
              className='block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500'
            />
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500'
          >
            Cadastrar
          </button>
        </form>
        <p className='text-sm text-center'>
          Já possui uma conta?{' '}
          <a href={loginPath} className='text-blue-600 hover:underline'>
            Entrar
          </a>
        </p>
      </div>
    </main>
  );
}
