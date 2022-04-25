import React from "react";

//
const UserList = (props) => {


    return (
        <React.Fragment>
             {props.userList.map(user => <li>{user.username} - {user.age}</li>)}
        </React.Fragment>
    )
}

export default UserList;