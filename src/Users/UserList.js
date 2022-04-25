import React from "react";

//
const UserList = (props) => {


    return (
        <div>
             {props.userList.map(user => <li>{user.username}</li>)}
        </div>
    )
}

export default UserList;