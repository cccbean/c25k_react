import { useEffect, useState } from 'react';
import Header from './components/Header';
import Begin from './components/Begin';
import End from './components/End';
import Timer from './components/Timer';
import { c25kPlan } from './lib/c25k';

export type state = 'begin' | 'walk' | 'run' | 'end';
export type session = {
	routine: ['w' | 'r', number][];
	duration: number;
};
export type settings = {
	radialTimer: boolean;
	animation: boolean;
	quotes: boolean;
	emoticons: boolean;
};
export type user = {
	name: string;
	sessionIndex: number;
	lastRun: Date | null;
	firstTime: boolean;
	settings: settings;
};

function App() {
	// in case of emergency
	// localStorage.clear();
	const [user, setUser] = useState<user>(() => {
		const savedUser = localStorage.getItem('user');
		if (savedUser) {
			return JSON.parse(savedUser);
		} else {
			return {
				name: '',
				sessionIndex: 0,
				lastRun: null,
				firstTime: true,
				settings: {
					radialTimer: true,
					animation: true,
					quotes: true,
					emoticons: true,
				},
			};
		}
	});
	const [state, setState] = useState<state>('begin');
	const [routineIndex, setRoutineIndex] = useState(0);
	// FIXME: what happens when sessionIndex > c25kPlan.length - 1?
	const session = c25kPlan[user.sessionIndex];

	useEffect(() => {
		console.log(user);
		localStorage.setItem('user', JSON.stringify(user));
	}, [user]);

	return (
		<div
			className={`flex h-screen flex-col ${state === 'run' && ' text-red'} ${state === 'walk' && 'text-blue'}`}
		>
			<Header state={state} user={user} setUser={setUser} />
			{state === 'begin' && (
				<Begin setState={setState} user={user} setUser={setUser} session={session} />
			)}
			{(state === 'walk' || state === 'run') && (
				<Timer
					state={state}
					setState={setState}
					session={session}
					routineIndex={routineIndex}
					setRoutineIndex={setRoutineIndex}
					user={user}
				/>
			)}
			{state === 'end' && <End user={user} setUser={setUser} />}
		</div>
	);
}

export default App;
