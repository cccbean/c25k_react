import { useRef } from 'react';

function AttributionsModal() {
	const attributionsModal = useRef<HTMLDialogElement>(null);

	return (
		<>
			<button
				className="rounded-full border border-current px-4 py-2 font-bold hover:bg-mauve hover:text-base"
				onClick={() => {
					attributionsModal.current?.showModal();
				}}
			>
				Attributions
			</button>
			<dialog
				className="mocha rounded-xl bg-base font-noto text-mauve backdrop:bg-mauve/20"
				ref={attributionsModal}
				onClick={(e) => {
					e.stopPropagation();
					if (e.target instanceof HTMLDialogElement) {
						attributionsModal.current?.close();
					}
				}}
			>
				<div className="flex flex-col gap-4 p-8">
					<h1 className="text-center text-3xl">Attributions</h1>
					<p>
						This application uses this sound from freesound.org: "clave_hit07.wav" by soundbytez (
						<a className="underline" href="https://freesound.org/people/soundbytez/sounds/121389/">
							https://freesound.org/people/soundbytez/sounds/121389/
						</a>
						) licensed under CCBY 3.0.
					</p>
					<button
						className="rounded-full border border-current px-4 py-2 font-bold hover:bg-mauve hover:text-base"
						onClick={() => {
							attributionsModal.current?.close();
						}}
					>
						Close
					</button>
				</div>
			</dialog>
		</>
	);
}

export default AttributionsModal;
