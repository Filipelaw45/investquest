'use client';

import { Progress } from '@/components/ui/progress';
import { useState } from 'react';

interface MissionProps {
	title: string;
	progress: number;
	description: string;
	link?: string;
}

const Mission: React.FC<MissionProps> = ({ title, description, link }) => {
	const [progress, setProgress] = useState(0);

	const handleLinkClick = () => {
		setProgress(100);
	};

	return (
		<>
			<section className='w-1/2 flex flex-col h-52 border-4 p-6'>
				<div>
					<h1 className='text-xl'>{title}</h1>
					<h1 className='text-xs'>{description}</h1>
				</div>
				<div className='mt-auto'>
					<a href={link} target='blank'>
						<button
							onClick={handleLinkClick}
							className='w-1/2 bg-primary-black text-white'
						>
							Ir
						</button>
					</a>

					<p className='mt-4'>{progress}%</p>
					<Progress value={progress} />
				</div>
			</section>
		</>
	);
};

export default Mission;
