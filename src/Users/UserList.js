import React from "react";


const UserList = (props) => {


    return (
        <div>
            {props.userList.map(user => <p>{user.username}</p>)}

        </div>
    )
}

export default UserList;