export const SunIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<g
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		>
			<g strokeDasharray="2">
				<path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						dur="0.2s"
						values="4;2"
					/>
				</path>
				<path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="0.2s"
						dur="0.2s"
						values="4;2"
					/>
				</path>
			</g>
			<path
				fill="currentColor"
				d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
				opacity="0"
			>
				<set attributeName="opacity" begin="0.5s" to="1" />
			</path>
		</g>
		<g fill="currentColor" fillOpacity="0">
			<path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
				<animate
					id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
					fill="freeze"
					attributeName="fill-opacity"
					begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
		</g>
		<mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
			<circle cx="12" cy="12" r="12" fill="#fff" />
			<circle cx="22" cy="2" r="3" fill="#fff">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.1s"
					dur="0.4s"
					values="22;18"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.1s"
					dur="0.4s"
					values="2;6"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.1s"
					dur="0.4s"
					values="3;12"
				/>
			</circle>
			<circle cx="22" cy="2" r="1">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.1s"
					dur="0.4s"
					values="22;18"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.1s"
					dur="0.4s"
					values="2;6"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.1s"
					dur="0.4s"
					values="1;10"
				/>
			</circle>
		</mask>
		<circle
			cx="12"
			cy="12"
			r="6"
			fill="currentColor"
			mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
		>
			<set attributeName="opacity" begin="0.5s" to="0" />
			<animate
				fill="freeze"
				attributeName="r"
				begin="0.1s"
				dur="0.4s"
				values="6;10"
			/>
		</circle>
	</svg>
);

export const MoonIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
		<g
			fill="none"
			stroke="currentColor"
			strokeDasharray="2"
			strokeDashoffset="2"
			strokeLinecap="round"
			strokeWidth="2"
		>
			<path d="M0 0">
				<animate
					fill="freeze"
					attributeName="d"
					begin="1.2s"
					dur="0.2s"
					values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
				/>
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="1.2s"
					dur="0.2s"
					values="2;0"
				/>
			</path>
			<path d="M0 0">
				<animate
					fill="freeze"
					attributeName="d"
					begin="1.5s"
					dur="0.2s"
					values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
				/>
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="1.5s"
					dur="1.2s"
					values="2;0"
				/>
			</path>
			<animateTransform
				attributeName="transform"
				dur="30s"
				repeatCount="indefinite"
				type="rotate"
				values="0 12 12;360 12 12"
			/>
		</g>
		<g fill="currentColor">
			<path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="0.2s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
		</g>
		<g
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		>
			<path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
			<set attributeName="opacity" begin="0.6s" to="0" />
		</g>
		<mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
			<circle cx="12" cy="12" r="12" fill="#fff" />
			<circle cx="18" cy="6" r="12" fill="#fff">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.6s"
					dur="0.4s"
					values="18;22"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.6s"
					dur="0.4s"
					values="6;2"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.6s"
					dur="0.4s"
					values="12;3"
				/>
			</circle>
			<circle cx="18" cy="6" r="10">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.6s"
					dur="0.4s"
					values="18;22"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.6s"
					dur="0.4s"
					values="6;2"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.6s"
					dur="0.4s"
					values="10;1"
				/>
			</circle>
		</mask>
		<circle
			cx="12"
			cy="12"
			r="10"
			fill="currentColor"
			mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
			opacity="0"
		>
			<set attributeName="opacity" begin="0.6s" to="1" />
			<animate
				fill="freeze"
				attributeName="r"
				begin="0.6s"
				dur="0.4s"
				values="10;6"
			/>
		</circle>
	</svg>
);

export const CorvusLogo = ({ className, ...rest }) => (
	<svg
		className={` fi${className}`}
		version="1.1"
		id="Layer_1"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		width="48"
		height="48"
		viewBox="0 0 48 48"
		xmlSpace="preserve"
		{...rest}
	>
		<g>
			<path
				d="M47.096,17.3c-0.856-1.438-2.079-2.518-3.45-3.439c-2.433-1.635-5.129-2.7-7.898-3.609
		c-0.274-0.09-0.582-0.262-0.747-0.487c-2.43-3.337-5.754-5.217-9.792-5.626c-7.734-0.784-14.369,1.675-20.059,6.703
		c-0.29,0.255-0.577,0.518-0.862,0.787c-0.116,0.109-0.204,0.248-0.396,0.486c0.263-0.083,0.52-0.165,0.774-0.246
		c1.046-0.333,2.039-0.621,3.166-0.633c-1.535,1.581-3.091,3.094-4.519,4.718C2.077,17.36,0.94,18.848,0,20.537
		c0.981-0.419,1.9-0.811,2.799-1.196c0.385-0.164,0.766-0.327,1.148-0.489c0.04,0.057,0.079,0.115,0.118,0.172
		c-0.087,0.187-0.167,0.378-0.262,0.561c-0.333,0.653-0.689,1.29-1.066,1.913c0.225,12.448,10.421,22.506,22.922,22.506
		c4.428,0,8.567-1.261,12.076-3.444c-2.104-3.328-4.836-6.207-8.38-8.503c-0.177-0.114-0.326-0.4-0.339-0.615
		c-0.089-1.339-0.179-2.681-0.178-4.021c0.002-0.698,0.193-1.397,0.315-2.21c0.363,0.792,0.665,1.449,1,2.176
		c0.193-1.458,0.368-2.788,0.544-4.117c0.057,0.006,0.113,0.013,0.17,0.018c0.128,0.454,0.255,0.908,0.382,1.362
		c0.049-0.01,0.098-0.02,0.148-0.029c0.09-0.576,0.168-1.154,0.271-1.727c0.194-1.056,0.405-2.113,1.065-3.002
		c0.486-0.656,1.073-1.006,1.959-0.785c1.285,0.321,2.584,0.61,3.892,0.804c2.232,0.33,4.472,0.641,6.72,0.827
		c0.94,0.077,1.902-0.162,2.609,0.893C48.166,19.957,47.859,18.58,47.096,17.3z M20.103,9.564c0.569-0.237,1.245-0.449,1.851-0.786
		c1.044-0.579,2.091-0.705,3.195-0.255c0.811,0.331,1.563,0.757,2.187,1.411C24.799,11.412,22.05,11.218,20.103,9.564z"
			/>
		</g>
	</svg>
);

// export const CorvusLogo = ({ className, ...rest }) => {
// 	return (
// 		<svg
// 			version="1.0"
// 			id="Layer_1"
// 			xmlns="http://www.w3.org/2000/svg"
// 			xmlns:xlink="http://www.w3.org/1999/xlink"
// 			x="0px"
// 			y="0px"
// 			viewBox="0 0 2000 2000"
// 			enable-background="new 0 0 2000 2000"
// 			xml:space="preserve"
// 		>
// 			<g>
// 				<path
// 					d="M1539.406,843.52c-20-33.594-48.557-58.802-80.587-80.318c-56.822-38.191-119.78-63.056-184.45-84.279
// 		c-6.406-2.103-13.594-6.112-17.457-11.369c-56.749-77.946-134.377-121.834-228.705-131.394
// 		c-180.637-18.313-335.6,39.12-468.486,156.553c-6.773,5.966-13.472,12.103-20.122,18.386c-2.714,2.543-4.768,5.795-9.242,11.345
// 		c6.137-1.932,12.152-3.863,18.069-5.746c24.426-7.775,47.629-14.499,73.937-14.792c-35.844,36.919-72.201,72.25-105.551,110.196
// 		c-28.826,32.812-55.379,67.58-77.335,107.018c22.909-9.78,44.376-18.949,65.379-27.922c8.997-3.839,17.897-7.628,26.822-11.418
// 		c0.929,1.32,1.834,2.69,2.763,4.01c-2.029,4.377-3.912,8.826-6.112,13.105c-7.775,15.257-16.088,30.122-24.89,44.67
// 		c5.257,290.734,243.375,525.625,535.356,525.625c103.423,0,200.074-29.462,282.031-80.44
// 		c-49.145-77.726-112.934-144.964-195.722-198.583c-4.132-2.665-7.604-9.34-7.922-14.352c-2.078-31.271-4.181-62.616-4.156-93.912
// 		c0.049-16.308,4.499-32.616,7.359-51.614c8.484,18.509,15.526,33.839,23.35,50.831c4.498-34.059,8.606-65.11,12.714-96.162
// 		c1.32,0.147,2.641,0.293,3.961,0.416c2.983,10.611,5.966,21.198,8.924,31.809c1.149-0.244,2.298-0.465,3.447-0.685
// 		c2.103-13.447,3.912-26.944,6.333-40.342c4.523-24.67,9.462-49.34,24.865-70.122c11.345-15.33,25.061-23.497,45.746-18.337
// 		c30,7.506,60.343,14.254,90.905,18.778c52.127,7.702,104.45,14.963,156.944,19.315c21.956,1.809,44.425-3.79,60.929,20.856
// 		C1564.394,905.574,1557.23,873.422,1539.406,843.52z M908.988,662.835c13.301-5.526,29.071-10.489,43.227-18.362
// 		c24.377-13.521,48.826-16.455,74.621-5.966c18.949,7.726,36.504,17.677,51.076,32.959
// 		C1018.671,706.013,954.465,701.466,908.988,662.835z"
// 				/>
// 			</g>
// 		</svg>
// 	);
// };
