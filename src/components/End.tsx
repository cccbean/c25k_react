import { useEffect } from 'react';
import { user } from '../App';

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
		<main className="flex-1 self-center px-4 md:w-96">
			<h1 className="py-8 text-center text-3xl">Congratulations!</h1>
			<p className="py-1 text-lg">Good job! See you in a couple days</p>
			{/* TODO: random text emoji */}
			<p className="py-1 text-lg">(˵¯͒〰¯͒˵)</p>
			{/* TODO: random quotes */}
			<p className="py-1 text-lg">Inspirational quote 2</p>
		</main>
	);
}

export default End;
