'use client';

import { useEffect, useState } from 'react';

export interface Wallet {
  balance: number;
}

export interface LeaderboardUser {
  id: string;
  name: string;
  Wallet: Wallet;
}

const Leaderboard: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/leaderboard');
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        const data: LeaderboardUser[] = await response.json();
        setLeaderboardData(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) return <div className='text-center py-4'>Carregando...</div>;
  if (error) return <div className='text-center py-4 text-red-500'>{error}</div>;

  const getCrown = (index: number) => {
    if (index === 0) return '👑';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return null;
  };

  return (
    <div className='max-w-2xl mx-auto mt-3 p-4 mb-20'>
      <h1 className='text-2xl font-bold text-center mb-6'>Ranking</h1>
      <ul className='bg-white shadow-md rounded-lg'>
        {leaderboardData.map((user, index) => (
          <li
            key={user.id}
            className={`flex items-center justify-between py-4 px-6 border-b ${
              index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            <div className='flex items-center space-x-4'>
              <span className='font-semibold'>
                {index > 2 && `${index + 1}. `}
                <span className='text-2xl'>{getCrown(index)}</span>
                {user.name}
              </span>
            </div>
            <span className='text-gray-600'>{user.Wallet.balance} Dracoins</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
