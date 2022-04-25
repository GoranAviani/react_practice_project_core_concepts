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
        if (+age > 0){
            return true
        }else{
                        console.log("user to young")

        }
    }

    const userNameValidation = (userName) => {
        if (userName.trim().length >2){
            return true
        }else{
            console.log('username too short')
}
    }

    const submitHandler = (e) => {
        e.preventDefault()
       // console.log(userInput)
        if (ageValidation(userInput.age) && userNameValidation(userInput.username)){
           props.addUser(userInput)
            setUserInput({username: '', age:''})
        }
        // display error message to user

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