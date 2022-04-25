import React , {useState} from "react";

const AddUser = () => {
    const [userName, setUserName] = useState('')

    const userNameHandler = (e)=> {
        setUserName(e.target.value)
        console.log(userName)
    }

    return (
        <div>
            <input value={userName} onChange={userNameHandler}/>
            add user
        </div>
    )
}

export default AddUser;