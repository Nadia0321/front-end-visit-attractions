// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const LoginButton = () => {
//     const { loginWithRedirect, isAuthenticated } = useAuth0();

//     return (
//         !isAuthenticated && (
//             <button onClick={() => loginWithRedirect()}>
//                 Login
//             </button>
//         )
//     )

// }

// export default LoginButton

import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";


const kBaseURL = "https://back-end-visit-attraction.onrender.com";

const LoginButton = ({ user }) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        console.log("is it being called?")
        setLoading(true)
        loginWithRedirect()
    };

    useEffect(() => {
        const checkUserAndPost = async () => {
            if (user) {
                setLoading(true);
                try {
                    const response = await axios.get(`${kBaseURL}/users/${user.sub}`);
                    if (!response.data) {
                        await axios.post(`${kBaseURL}/users/`, {
                            name: user.name,
                            email: `${user.name}@gmail.com`,
                            username: user.sub,
                        });
                    }
                } catch (error) {
                    console.error("Error checking or posting user:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        checkUserAndPost();
    }, [user]);

    // console.log(user)
    return (
        !isAuthenticated && (
            <button onClick={handleLogin} disabled={loading}>
                {loading ? "Loading..." : "Login"}
            </button>
        )
    )

}

export default LoginButton