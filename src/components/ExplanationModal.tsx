import { useRef } from 'react';

function ExplanationModal() {
	const explanationModal = useRef<HTMLDialogElement>(null);

	return (
		<>
			<button
				className="rounded-full border border-current px-4 py-2 font-bold hover:bg-mauve hover:text-base"
				onClick={() => {
					explanationModal.current?.showModal();
				}}
			>
				What is this?
			</button>
			<dialog
				className="mocha rounded-xl bg-base font-noto text-mauve backdrop:bg-mauve/20"
				ref={explanationModal}
				onClick={(e) => {
					e.stopPropagation();
					if (e.target instanceof HTMLDialogElement) {
						explanationModal.current?.close();
					}
				}}
			>
				<div className="flex flex-col gap-4 rounded-xl p-8">
					<h1 className="text-center text-3xl">Explanation</h1>
					<p>A really thoughtful explanation</p>
					<button
						className="rounded-full border border-current px-4 py-2 font-bold hover:bg-mauve hover:text-base"
						onClick={() => {
							explanationModal.current?.close();
						}}
					>
						Close
					</button>
				</div>
			</dialog>
		</>
	);
}

export default ExplanationModal;
