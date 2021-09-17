import "./App.css";
import BasicForm from "./BasicForm/BasicForm";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn Formik
				</a>
			</header>
			<section>
				<BasicForm />
			</section>
		</div>
	);
}

export default App;
