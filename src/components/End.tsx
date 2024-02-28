import { useEffect, useState } from 'react';
import { user } from '../App';
import { textEmojis } from '../lib/textEmojis';

type EndProps = {
	setUser: React.Dispatch<React.SetStateAction<user>>;
};

function End({ setUser }: EndProps) {
	const [emoji, setEmoji] = useState(() => {
		const emojiIndex = Math.floor(Math.random() * (textEmojis.length - 1));
		return textEmojis[emojiIndex]
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
			<p className="py-1 text-lg">Good job! See you in a couple days</p>
			<p className="py-1 text-lg">{emoji}</p>
			{/* TODO: random quotes */}
			<p className="py-1 text-lg">Inspirational quote 2</p>
		</main>
	);
}

export default End;
