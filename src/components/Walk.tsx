import { useEffect, useState } from 'react';
import { state } from '../App';

type WalkProps = {
	setState: React.Dispatch<React.SetStateAction<state>>;
};

function Walk({ setState }: WalkProps) {
	const [seconds, setSeconds] = useState(180);
	const minutes = Math.floor(seconds / 60);
	const progress = 100 - (seconds / 180) * 100;

	useEffect(() => {
		if (seconds > 0) {
			const timeout = setTimeout(() => {
				setSeconds((prevSeconds) => prevSeconds - 1);
			}, 1000);
			return () => clearTimeout(timeout);
		}
	}, [seconds]);

	return (
		// TODO: add h1 that says Walk lmao
		<main className="relative grid flex-1 place-items-center">
			<p className="text-9xl text-blue">
				{minutes}:{`${seconds - minutes * 60}`.padStart(2, '0')}
			</p>
			<div
				className={`absolute -z-10 h-96 w-96 rounded-full`}
				style={{
					background: `radial-gradient(closest-side,#2D353B 95%,transparent 96% 100%),conic-gradient(#3A515D ${progress}%,#7FBBB3 0)`,
				}}
			></div>
			{/* for accessibility */}
			<progress className="invisible absolute" value={`${progress}`} max="100">
				{progress}
			</progress>
		</main>
	);
}

export default Walk;
