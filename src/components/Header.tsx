import { useRef } from 'react';
import { state, user } from '../App';
import ExplanationModal from './ExplanationModal';
import AttributionsModal from './AttributionsModal';

type HeaderProps = {
	state: state;
	user: user;
	setUser: React.Dispatch<React.SetStateAction<user>>;
};

function Header({ state, user, setUser }: HeaderProps) {
	const settingsModal = useRef<HTMLDialogElement>(null);

	return (
		<header className="flex items-center justify-between border-b border-current p-4">
			<button onClick={() => location.reload()}>
				<svg
					className="h-12 w-12"
					width="66"
					height="66"
					viewBox="0 0 66 66"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M57.3427 55.5276L51.5213 46.6434C51.4388 46.4784 51.2841 46.3598 51.1036 46.3186C50.9231 46.2773 50.7375 46.3237 50.5931 46.4372C47.3344 49.0205 41.7347 50.9695 37.5633 50.9695C29.5041 50.9695 21.2953 42.9361 21.2953 35.1244C21.2953 27.3126 29.5041 19.2792 37.5633 19.2792C41.9255 19.2792 46.4011 20.6817 49.2371 22.9453C49.3763 23.0587 49.567 23.1 49.7424 23.0691C49.9177 23.033 50.0724 22.9195 50.16 22.7597L56.6156 13.5764C56.76 13.3134 56.693 12.9834 56.4558 12.7978C51.5728 8.93061 45.375 7.04858 37.5066 7.04858C20.7488 7.04858 8.59033 18.8616 8.59033 35.1295C8.59033 51.4026 20.7488 63.2105 37.5066 63.2105C45.1739 63.2105 51.7997 60.8798 57.1931 56.2753C57.4097 56.0897 57.4716 55.7803 57.3427 55.5276Z"
						fill="currentColor"
					/>
					<g clipPath="url(#clip0_6_25)">
						<path
							d="M37.8773 50.0242C39.7569 49.17 40.9673 47.6921 41.3775 45.7505C42.1265 42.2069 40.9183 40.4515 39.8522 38.9028C39.0855 37.789 38.4234 36.8274 38.4234 35.1516C38.4234 35.1508 38.4234 35.1502 38.4234 35.1493C38.4234 33.4741 39.0856 32.5121 39.8523 31.3984C40.9184 29.8499 42.1271 28.0947 41.3776 24.552C40.9672 22.6092 39.7563 21.1307 37.8758 20.2763C35.3443 19.1261 31.9693 19.3242 30.1696 20.1799C28.007 21.2066 26.0111 22.9798 24.3979 25.3074C22.3354 28.2821 21.1527 31.8676 21.1527 35.146C21.1527 35.1475 21.1527 35.1492 21.1527 35.1505C21.1529 38.4305 22.3355 42.018 24.3973 44.9929C26.0113 47.3217 28.0066 49.0948 30.1672 50.1204C31.9689 50.9768 35.3454 51.1748 37.8773 50.0242ZM31.1584 48.298C29.3669 47.4477 27.6179 45.8794 26.2335 43.8818C24.3949 41.2288 23.3404 38.0462 23.3404 35.1501L23.3404 35.1497C23.3404 35.1483 23.3404 35.1472 23.3404 35.1457C23.3404 32.2516 24.395 29.0709 26.234 26.4185C27.6178 24.4219 29.3674 22.8535 31.1611 22.002C32.2616 21.4787 34.9453 21.2178 36.9191 22.1146C38.1769 22.6861 38.9549 23.6393 39.2313 24.9479C39.3636 25.573 39.422 26.118 39.422 26.6043C39.422 28.2448 38.7563 29.212 38.0124 30.2924C37.1795 31.5021 36.2356 32.8731 36.2356 35.1489C36.2357 35.1496 36.2356 35.1507 36.2356 35.1518C36.2356 37.4278 37.1795 38.7989 38.0123 40.0086C38.9767 41.4094 39.8095 42.6193 39.2313 45.3543C38.9549 46.6618 38.1775 47.6143 36.9204 48.1857C34.9462 49.0831 32.2605 48.8219 31.1584 48.298Z"
							fill="currentColor"
						/>
						<path
							d="M35.4748 37.9932C34.4178 35.7539 34.9611 34.3573 35.6028 33.58L33.8709 32.3311C33.087 33.2803 32.6929 34.4075 32.6929 35.6419C32.6929 36.643 32.9523 37.7147 33.4732 38.8181L35.4748 37.9932Z"
							fill="currentColor"
						/>
					</g>
					<defs>
						<clipPath id="clip0_6_25">
							<rect
								width="31.35"
								height="33.55"
								fill="currentColor"
								transform="translate(48.1566 19.4754) rotate(90)"
							/>
						</clipPath>
					</defs>
				</svg>
			</button>
			{state !== 'walk' && state !== 'run' && (
				<>
					<button
						onClick={() => {
							settingsModal.current?.showModal();
							settingsModal.current?.classList.add('translate-x-0');
						}}
					>
						<svg
							className="h-12 w-12"
							width="800px"
							height="800px"
							viewBox="0 0 1024 1024"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
						>
							<g id="SVGRepo_bgCarrier" strokeWidth="0" />

							<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

							<g id="SVGRepo_iconCarrier">
								<path
									fill="currentColor"
									d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
								/>
							</g>
						</svg>
					</button>
                    
                    {/* TODO: make settings look nicer */}
					<dialog
						className="mocha mr-0 h-full max-h-none w-[90%] translate-x-[100%] rounded-l-xl bg-base font-noto text-mauve transition-transform"
						ref={settingsModal}
						onClick={(e) => {
							if (e.target instanceof HTMLDialogElement) {
								settingsModal.current?.classList.remove('translate-x-0');
								setTimeout(() => {
									settingsModal.current?.close();
								}, 160);
							}
						}}
					>
						<div className="flex h-full w-full flex-col px-4">
							<h1 className="py-8 text-center text-3xl">Settings</h1>

							<div className="flex justify-around">
								<ExplanationModal />

								<AttributionsModal />
							</div>

							<div className="rounded-md border border-mauve bg-crust px-4 py-2 text-lg">
								<div>
									<input
										type="checkbox"
										checked={user.settings.radialTimer}
										onChange={(e) =>
											setUser((prevUser) => ({
												...prevUser,
												settings: {
													...prevUser.settings,
													radialTimer: e.target.checked,
												},
											}))
										}
									/>
									<label htmlFor="">Timer radial progress bar</label>
								</div>
								<div>
									<input
										type="checkbox"
										checked={user.settings.animation}
										onChange={(e) =>
											setUser((prevUser) => ({
												...prevUser,
												settings: {
													...prevUser.settings,
													animation: e.target.checked,
												},
											}))
										}
									/>
									<label htmlFor="">Walk/run animation</label>
								</div>
								<div>
									<input
										type="checkbox"
										checked={user.settings.quotes}
										onChange={(e) =>
											setUser((prevUser) => ({
												...prevUser,
												settings: {
													...prevUser.settings,
													quotes: e.target.checked,
												},
											}))
										}
									/>
									<label htmlFor="">Random quotes</label>
								</div>

								<div>
									<input
										type="checkbox"
										checked={user.settings.emoticons}
										onChange={(e) =>
											setUser((prevUser) => ({
												...prevUser,
												settings: {
													...prevUser.settings,
													emoticons: e.target.checked,
												},
											}))
										}
									/>
									<label htmlFor="">Random emoticons</label>
								</div>
							</div>

							{/* TODO: make this have a modal popup warning the user */}
							<button
								className="rounded-full border border-current px-4 py-2 font-bold hover:bg-mauve hover:text-base"
								onClick={() => {
									localStorage.clear();
									location.reload();
								}}
							>
								Clear local storage
							</button>

							<button
								className="rounded-full border border-current px-4 py-2 font-bold hover:bg-mauve hover:text-base"
								autoFocus
								onClick={() => {
									settingsModal.current?.classList.remove('translate-x-0');
									setTimeout(() => {
										settingsModal.current?.close();
									}, 160);
								}}
							>
								Close
							</button>
						</div>
					</dialog>
				</>
			)}
		</header>
	);
}

export default Header;
