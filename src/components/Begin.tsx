import { useState } from 'react';
import { session, state, user } from '../App';

type BeginProps = {
	setState: React.Dispatch<React.SetStateAction<state>>;
	user: user;
	setUser: React.Dispatch<React.SetStateAction<user>>;
	session: session;
};

function Begin({ setState, user, setUser, session }: BeginProps) {
	const [name, setName] = useState('');
	// TODO: work on welcome page
	const onSubmit = () => {
		setUser((prevUser) => ({
			name: name,
			sessionIndex: prevUser.sessionIndex,
			lastRun: prevUser.lastRun,
			firstTime: false,
		}));
	};

	if (user.firstTime) {
		return (
			<main className="grid flex-1 place-items-center">
				<div>
					<h1 className="text-xl">Welcome to c25k!</h1>
					<form className="flex flex-col" action="" onSubmit={onSubmit}>
						<label htmlFor="name">Name (optional):</label>
						<input
							className="rounded-full border border-current bg-inherit px-4 py-2"
							type="text"
							name="name"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<button
							className="rounded-full border border-fg px-4 py-2 font-bold hover:bg-fg hover:text-bg0"
							type="submit"
						>
							Save
						</button>
					</form>
				</div>
			</main>
		);
	} else {
		return (
			<main className="grid flex-1 place-items-center">
				<div>
					<h1 className="text-xl">
						Welcome{user.sessionIndex > 0 ? ' back,' : ''}
						{user.name ? ` ${user.name}` : ''}!
					</h1>
					<p>Run: {user.sessionIndex + 1}/27</p>
					<p>Duration: {Math.ceil(session.duration / 60)} minutes</p>
					<p>Inspirational quote</p>
					<button
						className="rounded-full border border-fg px-4 py-2 font-bold hover:bg-fg hover:text-bg0"
						onClick={() => setState('walk')}
					>
						Begin
					</button>
					<button
						className="rounded-full border border-fg px-4 py-2 font-bold hover:bg-fg hover:text-bg0"
						onClick={() => {
							localStorage.clear();
							location.reload();
						}}
					>
						Clear local storage
					</button>
				</div>
			</main>
		);
	}
}

export default Begin;
