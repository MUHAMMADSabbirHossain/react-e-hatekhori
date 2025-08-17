import { useState } from "react";

function UseList() {
    const [users, setUsers] = useState([
        {
            id: crypto.randomUUID(),
            name: "Tapas",
            address: "Bangalore",
        },
    ]);

    function changeUser(id, name) {
        console.log(id, name);

        const userCopy = [...users];

        const found = userCopy.find((user) => user.id === id);
        found.name = name;

        setUsers(userCopy);
    }

    function addUser() {
        const newUser = {
            id: crypto.randomUUID(),
            name: "Jack",
            address: "Titanic",
        };

        setUsers([...users, newUser]);
    }

    return (
        <div className="flex flex-col">
            <ul>
                {
                    users.map((user, index) => <li key={index}>
                        <p>{user.name} lives in {user.address}</p>
                        <button
                            onClick={() => changeUser(user.id, "Random")}
                        >
                            Change
                        </button>
                    </li>)
                }
            </ul>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => addUser()}
            >
                Add
            </button>
        </div>
    )

}

export default UseList;