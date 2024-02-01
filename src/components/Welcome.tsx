type WelcomeProps = {
	setState: React.Dispatch<React.SetStateAction<'welcome' | 'running' | 'walking'>>;
};

function Welcome({ setState }: WelcomeProps) {
	return (
		<main className="flex-1">
			<h1 className="text-xl">Welcome</h1>
			<p>This is the welcome page</p>
			<button
				className="rounded-full border border-fg px-4 py-2 font-bold hover:bg-fg hover:text-bg0"
				onClick={() => setState('running')}
			>
				Start running
			</button>
		</main>
	);
}

export default Welcome;
