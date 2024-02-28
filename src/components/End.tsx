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
		<main className="flex-1 px-4">
			<h1 className="py-8 text-center text-3xl">Congratulations!</h1>
			<p className="text-lg py-1">Good job! See you in a couple days</p>
			{/* TODO: random text emoji */}
			<p className="text-lg py-1">(˵¯͒〰¯͒˵)</p>
			{/* TODO: random quotes */}
            <p className="text-lg py-1">Inspirational quote 2</p>
		</main>
	);
}

export default End;
