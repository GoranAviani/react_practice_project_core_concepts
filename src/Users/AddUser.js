import React, {useState} from "react";

const AddUser = (props) => {
    const [userName, setUserName] = useState({username: '', age:''})

    const userNameHandler = (e) => {
        setUserName({...userName, username: e.target.value})
    }


    const submitHandler = (e) => {
        e.preventDefault()
        props.addUser(userName)

    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input value={userName} onChange={userNameHandler}/>
                add user
                <button type='submit'>Add User</button>
            </div>
        </form>
    )
}

export default AddUser;