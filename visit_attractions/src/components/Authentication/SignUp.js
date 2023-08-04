// import axios from "axios";
// import { useEffect, useState } from "react"
// import { Routes, Route, Link, useNavigate } from 'react-router-dom';




const SignUp = ({ onHandleValue, userData, handleSubmit }) => {

    // const defaultUser 
    const handleValue = (event) => {
        onHandleValue(event)
    }
    const handleSubmitForm = (event) => {
        handleSubmit(event)
    }



    return (
        // <div>
        <form onSubmit={handleSubmitForm}>
            <div>
                <label htmlFor="name" > Name: </label>
                <input type='text' id='name' name='name' value={userData.name} onChange={handleValue} minLength={1} maxLength={12} />
            </div>
            <div>
                <label htmlFor="email"> Email: </label>
                <input type='email' id='email' name='email' value={userData.email} onChange={handleValue} minLength={4} maxLength={30} />
            </div>

            <div>
                <label htmlFor="username"> Username </label>
                <input type='text' id='username' name='username' value={userData.username} onChange={handleValue} minLength={4} maxLength={16} />
            </div>
            {/* <div>
                <label htmlFor="password"> Password </label>
                <input type='password' id='password' name='password' value={userData.password} onChange={onHandleValue} minLength={4} maxLength={16} />
            </div> */}
            <div>
                <button type="submit">Sign up</button>
            </div>

        </form>

    )


}
export default SignUp