import { useEffect, useRef, useState } from 'react';
import { session, state, user } from '../App';
import claveWalk from '../../public/audio/clave-walk.wav';
import claveRun from '../../public/audio/clave-run.wav';

type TimerProps = {
	state: state;
	setState: React.Dispatch<React.SetStateAction<state>>;
	session: session;
	routineIndex: number;
	setRoutineIndex: React.Dispatch<React.SetStateAction<number>>;
	user: user;
};

// TODO: fix flickering between state changes
function Timer({ state, setState, session, routineIndex, setRoutineIndex, user }: TimerProps) {
	const [seconds, setSeconds] = useState(session.routine[routineIndex][1]);
	const minutes = Math.floor(seconds / 60);
	const progress = 100 - (seconds / session.routine[routineIndex][1]) * 100;

	const animationP = useRef<HTMLParagraphElement>(null);
	const walkAudio = useRef<HTMLAudioElement>(null);
	const runAudio = useRef<HTMLAudioElement>(null);

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
		if (animationP.current !== null && user.settings.animation) {
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

	useEffect(() => {
		if (walkAudio.current !== null && runAudio.current !== null) {
			// TODO: change state if-else to switch statements?
			if (state === 'walk') {
				walkAudio.current.play();
			} else if (state === 'run') {
				runAudio.current.play();
			}
		}
	}, [walkAudio, runAudio, state]);

	return (
		<main className="relative grid flex-1 place-items-center">
			<div className="flex flex-col gap-6">
				<h1 className="text-center text-4xl">{state === 'walk' ? 'Walk' : 'Run'}</h1>

				<p className="text-9xl">
					{minutes}:{`${seconds - minutes * 60}`.padStart(2, '0')}
				</p>

				{user.settings.animation ? (
					<p className="translate-y-[15px] text-center text-2xl" ref={animationP}>
						{'ε=ε=┏(>_<)┛'}
					</p>
				) : (
                    // TODO: the layout was weird without a third element here
					<p></p>
				)}
			</div>

			{state === 'walk' && user.settings.radialTimer && (
				<div
					className={`absolute -z-10 h-[95vw] w-[95vw] rounded-full md:h-96 md:w-96`}
					style={{
						background: `radial-gradient(closest-side,#1E1E2E 95%,transparent 96% 100%),conic-gradient(#89B4FA4D ${progress}%,#89B4FA 0)`,
					}}
				></div>
			)}

			{state === 'run' && user.settings.radialTimer && (
				<div
					className={`absolute -z-10 h-[95vw] w-[95vw] rounded-full md:h-96 md:w-96`}
					style={{
						background: `radial-gradient(closest-side,#1E1E2E 95%,transparent 96% 100%),conic-gradient(#F38BA84D ${progress}%,#F38BA8 0)`,
					}}
				></div>
			)}

			{/* for accessibility, not sure if this is needed */}
			<progress className="invisible absolute" value={`${progress}`} max="100">
				{progress}%
			</progress>

			{/* FIXME: sound cuts off on bluetooth devices, add dead sound to beginning and end */}
			<audio src={claveWalk} ref={walkAudio}></audio>
			<audio src={claveRun} ref={runAudio}></audio>
		</main>
	);
}

export default Timer;
