import React , {useState} from "react";

import AddUser from "./Users/AddUser";

const App = () => {
    const [userList, setUserList] = useState([])

    const expandUserList = (userName) => {
        setUserList([...userList, userName])
                console.log('APP' + userList)

    }

    return (
        <div>
        <AddUser addUser={expandUserList}/>
    </div>
    )
}

export default App;