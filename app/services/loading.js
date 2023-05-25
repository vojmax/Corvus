export default function Loading() {
	return (
		<section className="flex w-screen h-screen align-middle items-center justify-center bg-light dark:bg-dark">
			<div
				class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-dark border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:border-light"
				role="status"
			>
				<span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
					Loading...
				</span>
			</div>
		</section>
	);
}
