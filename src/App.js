import React , {useState} from "react";

import AddUser from "./Users/AddUser";
import UserList from "./Users/UserList";

const App = () => {
    const [userList, setUserList] = useState([])

    const expandUserList = (userName) => {
        setUserList([...userList, userName])
                console.log('APP' + userList)

    }

    return (
        <div>
        <AddUser addUser={expandUserList}/>
        <UserList/>
    </div>
    )
}

export default App;