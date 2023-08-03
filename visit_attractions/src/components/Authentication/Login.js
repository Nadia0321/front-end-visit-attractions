import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { checkIsLogin } from "../../Redux/loginStatusSlice";




const kBaseURL = "http://localhost:8000";


const Login = () => {
    const dispatch = useDispatch

    const [loginState, setLoginState] = useState(
        {
            gmail: '',
            password: '',
        }
    )

    const onHandleValue = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setLoginState(
            { ...loginState, [fieldName]: fieldValue }
        )
    }

    const onHandleLogin = (event) => {
        event.preventDefault();
        // checkUserPassword()
        checkUserLogin()
    }

    const checkUserLogin = () => {
        const userID = 6
        const userLogin = axios
            .get(`${kBaseURL}/users/${userID}/`)
            .then((res) => {
                return res.user
            })
            .catch((e) => console.log(e))
        if (userLogin.password === loginState.password) {
            dispatch(checkIsLogin)

        }
    }

    // const checkUserPassword = async () => {
    //     const userID = 1

    //     const result = await axios.get(`${kBaseURL}/user/${userID}`)
    //     if (result.user.password === loginState.password) {
    //         dispatch(checkIsLogin)

    //     }
    // }


    return (
        <div>
            <form onSubmit={onHandleLogin}>
                <div>
                    <label htmlFor="gmail">Enter Your Name: </label>
                    <input type='email' id='gmail' name='gmail' value={loginState.gmail} onChange={onHandleValue} minLength={4} maxLength={30} />
                </div>

                <div>
                    <label htmlFor="password">Enter Your Password:  </label>
                    <input type='password' id='password' name='password' value={loginState.password} onChange={onHandleValue} minLength={4} maxLength={16} />
                </div>
                <button type='submit'>Login</button>
            </form>

        </div>
    )

}

export default Login