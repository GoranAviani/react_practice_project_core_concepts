import React, {useState} from "react";

import AddUser from "./Users/AddUser";
import UserList from "./Users/UserList";

const App = () => {
    const [userList, setUserList] = useState([])

    const expandUserList = (userInput) => {
        console.log(userInput)
        setUserList((prevUserList)=>{return[...prevUserList, userInput]})
        //setUserList([...userList, userInput])
        //console.log('APP' + userList)

    }

    return (
        <div>
            <AddUser addUser={expandUserList}/>
            <UserList userList={userList}/>
        </div>
    )
}

export default App;