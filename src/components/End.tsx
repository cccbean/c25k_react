import { useEffect } from 'react';
import { state, user } from '../App';

type EndProps = {
	setUser: React.Dispatch<React.SetStateAction<user>>;
};

function End({ setUser }: EndProps) {
	// FIXME: currently runs twice bc of strict mode so sessionIndex goes up twice instead of once
	useEffect(() => {
		const currentDate = new Date();
		setUser((prevUser) => ({
			name: prevUser.name,
			sessionIndex: prevUser.sessionIndex + 1,
			lastRun: currentDate,
			firstTime: false,
		}));
	}, []);

	return (
		<main className="flex-1">
			<h1 className="text-xl">End</h1>
			<p>You have finished</p>
            <p>Inspirational quote 2</p>
		</main>
	);
}

export default End;
