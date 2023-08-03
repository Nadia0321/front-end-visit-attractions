import axios from "axios";
import { useEffect, useState } from "react"
import { Routes, Route, Link, useNavigate } from 'react-router-dom';





const SignUp = () => {
    const navigate = useNavigate()
    const defaultUser = {
        name: '',
        username: '',
        email: '',
    }

    const [userData, setUserData] = useState(defaultUser)

    const onHandleValue = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        const newFormData = { ...userData, [fieldName]: fieldValue }
        setUserData(newFormData)

    }

    const kBaseURL = "http://localhost:8000";

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            name: userData.name,
            username: userData.username,
            email: userData.email,
        }
        console.log('new user:', newUser)
        onSubmitUser(newUser)
        setUserData(defaultUser)
    }

    const onSubmitUser = (data) => {
        return axios
            .post(`${kBaseURL}/users/`, data)
            .then((response) => {
                console.log(response.data)
                setUserData((prevData) => [...prevData, response.data])

                navigate('/');
            })

            .catch((e) => console.log(e))
    }


    return (
        // <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" > Name: </label>
                <input type='text' id='name' name='name' value={userData.name} onChange={onHandleValue} minLength={1} maxLength={12} />
            </div>
            <div>
                <label htmlFor="email"> Email: </label>
                <input type='email' id='email' name='email' value={userData.email} onChange={onHandleValue} minLength={4} maxLength={30} />
            </div>

            <div>
                <label htmlFor="username"> Username </label>
                <input type='text' id='username' name='username' value={userData.username} onChange={onHandleValue} minLength={4} maxLength={16} />
            </div>
            {/* <div>
                <label htmlFor="password"> Password </label>
                <input type='password' id='password' name='password' value={userData.password} onChange={onHandleValue} minLength={4} maxLength={16} />
            </div> */}
            <div>
                <button type="submit">Sign up</button>
            </div>

        </form>

        // </div>

    )


}
export default SignUp