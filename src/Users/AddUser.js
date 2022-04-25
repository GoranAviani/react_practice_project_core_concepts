import React, {useState} from "react";

const AddUser = (props) => {
    const [userInput, setUserInput] = useState({username: '', age:''})

    const userNameHandler = (e) => {
        setUserInput({...userInput, username: e.target.value})
    }


    const submitHandler = (e) => {
        e.preventDefault()
       // console.log(userInput)
        props.addUser(userInput)

    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input value={userInput.username} onChange={userNameHandler}/>
                add user
                <button type='submit'>Add User</button>
            </div>
        </form>
    )
}

export default AddUser;