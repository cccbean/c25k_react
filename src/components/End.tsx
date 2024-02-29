import { useEffect } from 'react';
import { user } from '../App';
import { textEmojis } from '../lib/textEmojis';
import { endQuotes } from '../lib/quotes';

type EndProps = {
	user: user;
	setUser: React.Dispatch<React.SetStateAction<user>>;
};

function End({ user, setUser }: EndProps) {
	const emojiIndex = Math.floor(Math.random() * textEmojis.length);
	const emoji = textEmojis[emojiIndex];

	const quoteIndex = Math.floor(Math.random() * endQuotes.length);
	const quote = endQuotes[quoteIndex];

	// FIXME: currently runs twice bc of strict mode so sessionIndex goes up twice instead of once, not an issue once deployed
	useEffect(() => {
		const currentDate = new Date();
		setUser((prevUser) => ({
			...prevUser,
			sessionIndex: prevUser.sessionIndex + 1,
			lastRun: currentDate,
		}));
	}, []);

	return (
		<main className="flex-1 px-4 md:w-96 md:self-center">
			<h1 className="py-8 text-center text-3xl">Congratulations!</h1>
			<div className="flex flex-col gap-2">
				<p className="text-lg">Good job! See you in a couple days</p>
				{user.settings.quotes && <p className="rounded-md bg-crust px-4 py-2 text-lg">{quote}</p>}
				<p className="text-lg">{emoji}</p>
			</div>
		</main>
	);
}

export default End;
