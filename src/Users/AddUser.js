import React, {useState} from "react";

const AddUser = (props) => {
    const [userInput, setUserInput] = useState({username: '', age:''})

    const userNameHandler = (e) => {
        setUserInput({...userInput, username: e.target.value})
    }

    const ageHandler = (e) => {
        setUserInput({...userInput, age: e.target.value})
    }

    const ageValidation = (age) => {
        if (age < 0){
            console.log("user to young")
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
       // console.log(userInput)
        ageValidation(parseInt(userInput.age))
        props.addUser(userInput)
        setUserInput({username: '', age:''})

    }

    return (
        <form onSubmit={submitHandler}>
                <input value={userInput.username} onChange={userNameHandler}/>
                <input value={userInput.age} onChange={ageHandler}/>
                <button type='submit'>Add User</button>
        </form>
    )
}

export default AddUser;