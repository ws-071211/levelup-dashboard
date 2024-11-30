import { ChartBarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function LevelupLogo() {
	return (
		<Link href="/">
			<div className="flex items-center text-white">
				<ChartBarIcon className="w-6 h-6" />
				<p className="text-lg font-bold">
					레벨업 Dashboard
				</p>
			</div>
		</Link>
	);
}
