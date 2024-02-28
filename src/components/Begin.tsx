import { useState } from 'react';
import { session, state, user } from '../App';
import { beginQuotes } from '../lib/quotes';

type BeginProps = {
	setState: React.Dispatch<React.SetStateAction<state>>;
	user: user;
	setUser: React.Dispatch<React.SetStateAction<user>>;
	session: session;
};

function Begin({ setState, user, setUser, session }: BeginProps) {
	const [name, setName] = useState('');
	const [quote, setQuote] = useState(() => {
		const quoteIndex = Math.floor(Math.random() * beginQuotes.length);
		return beginQuotes[quoteIndex];
	});

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
			<main className="flex-1 md:w-96 md:self-center">
				<div className="px-4">
					<h1 className="py-8 text-center text-3xl">Welcome to c25k!</h1>
					<form className="flex flex-col gap-6" action="" onSubmit={onSubmit}>
						<div className='flex flex-col gap-2'>
							<label className="text-lg" htmlFor="name">
								Name (optional):
							</label>
							<input
								className="rounded-full border border-current bg-inherit px-4 py-2"
								type="text"
								name="name"
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						{/* TODO: change buttons to have prettier colors */}
						{/* TODO: extract button to its own component */}
						<button
							className="rounded-full border border-current px-4 py-2 font-bold hover:bg-mauve hover:text-base"
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
			<main className="flex-1 md:w-96 md:self-center">
				<div className='px-4'>
					<h1 className="py-8 text-center text-3xl">
						{/* FIXME: make this look nicer */}
						Welcome
						{user.sessionIndex > 0 && user.name
							? ` back, ${user.name}`
							: user.sessionIndex > 0
								? ' back'
								: user.name
									? ` ${user.name}`
									: ''}
						!
					</h1>

					<div className="flex flex-col gap-2">
						<p className="text-lg">Run: {user.sessionIndex + 1}/27</p>
						<p className="text-lg">Duration: {Math.ceil(session.duration / 60)} minutes</p>
						{/* TODO: format quote, prob extract to its own component */}
						<p className="rounded-md bg-crust px-4 py-2 text-lg">{quote}</p>
					</div>

					<div className='flex flex-col py-8'>
						<button
							className="rounded-full border border-current px-4 py-2 font-bold hover:bg-mauve hover:text-base"
							onClick={() => setState('walk')}
						>
							Begin
						</button>
					</div>
					{/* TODO: just for dev, move to settings tho */}
					<button
						className="rounded-full border border-current px-4 py-2 font-bold hover:bg-mauve hover:text-base"
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
