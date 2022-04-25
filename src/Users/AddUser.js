import React, {useState} from "react";

import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [userInput, setUserInput] = useState({username: '', age: ''})
    const [errorState, setErrorState] = useState('')

    const userNameHandler = (e) => {
        setUserInput({...userInput, username: e.target.value})
    }

    const ageHandler = (e) => {
        setUserInput({...userInput, age: e.target.value})
    }

    const ageValidation = (age) => {
        if (+age > 0) {
            return true
        } else {
            console.log("user to young")
            setErrorState({title: "Invalid Age", errorMessage: "user yo young"})
        }
    }

    const userNameValidation = (userName) => {
        if (userName.trim().length > 2) {
            return true
        } else {
            console.log('username too short')
            setErrorState({title: "Invalid Username", errorMessage: "username to short"})
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(userInput)
        if (ageValidation(userInput.age) && userNameValidation(userInput.username)) {
            props.addUser(userInput)
            setUserInput({username: '', age: ''})
        }
        // display error message to user

    }

    return (
        <React.Fragment>
            {errorState && <ErrorModal title={errorState.title} errorMessage={errorState.errorMessage}/>
            }
            <form onSubmit={submitHandler}>
                <input value={userInput.username} onChange={userNameHandler}/>
                <input value={userInput.age} onChange={ageHandler}/>
                <button type='submit'>Add User</button>
            </form>
        </React.Fragment>

    )
}

export default AddUser;