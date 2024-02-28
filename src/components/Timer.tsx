import { useEffect, useRef, useState } from 'react';
import { session, state } from '../App';

type TimerProps = {
	state: state;
	setState: React.Dispatch<React.SetStateAction<state>>;
	session: session;
	routineIndex: number;
	setRoutineIndex: React.Dispatch<React.SetStateAction<number>>;
};

// TODO: fix flickering between state changes
function Timer({ state, setState, session, routineIndex, setRoutineIndex }: TimerProps) {
	const [seconds, setSeconds] = useState(session.routine[routineIndex][1]);
	const minutes = Math.floor(seconds / 60);
	const progress = 100 - (seconds / session.routine[routineIndex][1]) * 100;

	const animationP = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (seconds > 0) {
			const timeout = setTimeout(() => {
				setSeconds((prevSeconds) => prevSeconds - 1);
			}, 1000);
			return () => clearTimeout(timeout);
		} else {
			if (routineIndex < session.routine.length - 1) {
				setRoutineIndex((prevIndex) => prevIndex + 1);
			} else {
				setState('end');
			}
		}
	}, [seconds]);

	useEffect(() => {
		if (session.routine[routineIndex][0] === 'w') {
			setState('walk');
		} else {
			setState('run');
		}

		setSeconds(session.routine[routineIndex][1]);
	}, [routineIndex]);

	useEffect(() => {
		if (animationP.current !== null) {
			const text = animationP.current.textContent;
			if (text !== null) {
				animationP.current.innerHTML = text
					.split('')
					.map((letter) => {
						return `<span>${letter}</span>`;
					})
					.join('');
				
				if (state === 'walk') {
					Array.from(animationP.current.children).forEach((span, index) => {
						// FIXME: may have to clear timeouts
						setTimeout(
							() => {
								span.classList.add('inline-block');
								span.classList.add('motion-safe:animate-wavy-walk');
							},
							index * 60 + 200
						);
					});
				} else {
					Array.from(animationP.current.children).forEach((span, index) => {
						setTimeout(
							() => {
								span.classList.add('inline-block');
								span.classList.add('motion-safe:animate-wavy-run');
							},
							index * 60 + 200
						);
					});
				}
				
			}
		}
	}, [animationP, state]);

	return (
		// FIXME: timer has a fixed width and height which can go off screen
		<main className="relative grid flex-1 place-items-center">
			<div className="flex flex-col gap-6">
				<h1 className="text-center text-4xl">{state === 'walk' ? 'Walk' : 'Run'}</h1>

				<p className="text-9xl">
					{minutes}:{`${seconds - minutes * 60}`.padStart(2, '0')}
				</p>

				<p className="text-center text-2xl translate-y-[15px]" ref={animationP}>
					{'ε=ε=┏(>_<)┛'}
				</p>
			</div>

			{state === 'walk' && (
				<div
					className={`absolute -z-10 h-96 w-96 rounded-full`}
					style={{
						background: `radial-gradient(closest-side,#1E1E2E 95%,transparent 96% 100%),conic-gradient(#89B4FA4D ${progress}%,#89B4FA 0)`,
					}}
				></div>
			)}

			{state === 'run' && (
				<div
					className={`absolute -z-10 h-96 w-96 rounded-full`}
					style={{
						background: `radial-gradient(closest-side,#1E1E2E 95%,transparent 96% 100%),conic-gradient(#F38BA84D ${progress}%,#F38BA8 0)`,
					}}
				></div>
			)}

			{/* for accessibility, not sure if this is needed */}
			<progress className="invisible absolute" value={`${progress}`} max="100">
				{progress}%
			</progress>
		</main>
	);
}

export default Timer;
