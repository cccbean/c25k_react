import { useEffect, useState } from 'react';
import { user } from '../App';
import { textEmojis } from '../lib/textEmojis';
import { endQuotes } from '../lib/quotes';

type EndProps = {
	setUser: React.Dispatch<React.SetStateAction<user>>;
};

function End({ setUser }: EndProps) {
	const [emoji, setEmoji] = useState(() => {
		const emojiIndex = Math.floor(Math.random() * textEmojis.length);
		return textEmojis[emojiIndex];
	});
	const [quote, setQuote] = useState(() => {
		const quoteIndex = Math.floor(Math.random() *endQuotes.length);
		return endQuotes[quoteIndex];
	});

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
		<main className="flex-1 px-4 md:w-96 md:self-center">
			<h1 className="py-8 text-center text-3xl">Congratulations!</h1>
			<div className="flex flex-col gap-2">
				<p className="text-lg">Good job! See you in a couple days</p>
				<p className="text-lg">{emoji}</p>
				<p className="rounded-md bg-crust px-4 py-2 text-lg">{quote}</p>
			</div>
		</main>
	);
}

export default End;
