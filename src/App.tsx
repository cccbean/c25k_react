import { useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Running from './components/Running';
import Walking from './components/Walking';

function App() {
	const [state, setState] = useState<'welcome' | 'running' | 'walking'>('running');

	return (
		<>
			<div className={`flex flex-col h-screen ${state === 'welcome' && 'text-fg'} ${state === 'running' && 'text-red border-red'} ${state === 'walking' && 'text-blue border-blue'}`}>
				<Header />
				{state === 'welcome' && <Welcome setState={setState} />}
				{state === 'running' && <Running setState={setState} />}
				{state === 'walking' && <Walking setState={setState} />}
			</div>
		</>
	);
}

export default App;
