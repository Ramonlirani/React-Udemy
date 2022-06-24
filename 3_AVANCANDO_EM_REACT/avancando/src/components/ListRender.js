import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Ramon", "Natalia", "Edna"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Ramon", age: 25},
        {id: 2, name: "Natalia", age: 22},
        {id: 3, name: "Romulo", age: 25}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (

    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user)=> (
                <li key={user.id}>
                  {user.name} - {user.age}
                </li>
            ))}            
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender