import "./App.css";
import User from "./components/User";

const friends = [
	{
		id: 1,
		name: "Furkan",
	},
	{
		id: 2,
		name: "Gökhan",
	},
	{
		id: 3,
		name: "Mert",
	},
];

function App() {
	return (
		<>
			<User
				name="Yunus Emre"
				surname="Dinç"
				isLoggedIn={true}
				age={23}
				friends={friends}
				address={{
					title: "Ümraniye/İstanbul",
					zip: 34766,
				}}
			/>
		</>
	);
}

export default App;
