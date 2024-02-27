import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');

	const [users, setUsers] = useState([]);

	const addUser = () => {
		Axios.post('http://localhost/bca4sem-project/api/', {
			name: name,
			email: email,
			address: address 
		}).then(() => {
			console.log("Success!");
			setUsers([...users, {
				name: name,
				email: email,
				address: address
			}])
		})
	};

	const getUsers = () => {
		Axios.get("http://localhost/bca4sem-project/api/").then((response) => {
			setUsers(response.data);
		});
	};

	const displayInfo = () => {
		console.log(`Name: ${name}, Email: ${email}, Address: ${address}`);
	};

	const deleteUser = (id) => {
		Axios.delete(`http://localhost/bca4sem-project/api/${id}`).then((response) => {
			setUsers(users.filter((user) => user.id !== id));
			console.log(response.data);
		});
	};

	return(
		<>
			<div className="app">
				<div className="form">

					<label>Name:</label>
					<input type="text" onChange={(event) => {setName(event.target.value)}} />

					<label>Email:</label>
					<input type="text" onChange={(event) => {setEmail(event.target.value)}} />

					<label>Address:</label>
					<input type="text" onChange={(event) => {setAddress(event.target.value)}} />

					<button onClick={addUser}>Add User</button>

				</div>

				<hr />

				<div className="users">

					<button onClick={getUsers}>Show Users</button>

					{users.map((val, key) => {
						return(
							<div className='user' key={key}> 
							<h3>ID: {val.id}</h3>
							<h3>Name: {val.name} </h3>
							<h3>Email: {val.email} </h3>
							<h3>Address: {val.address} </h3>
							<button onClick={() => deleteUser(val.id)}>Delete</button>
						</div>
						)
					})}

				</div>
			</div>
		</>
	)
};

export default App;