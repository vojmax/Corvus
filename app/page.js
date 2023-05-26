import Contact from "./contact/page";
import Projects from "./projects/page";
import Services from "./services/page";

function Home() {
	return (
		<>
			<section
				id="home"
				className="flex h-screen bg-light text-center justify-center items-center  dark:bg-dark dark:text-light "
			>
				<h1>Home</h1>
			</section>
			<Projects />
			<Services />
			<Contact />
		</>
	);
}

export default Home;
