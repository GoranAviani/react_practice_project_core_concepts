import React from "react";

//
const UserList = (props) => {


    return (
        <React.Fragment>
             {props.userList.map((user, index) => <li key={index} >{user.username} - {user.age} years old</li>)}
        </React.Fragment>
    )
}

export default UserList;