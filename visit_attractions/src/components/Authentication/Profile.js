import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = ({ user, isAuthenticated }) => {
    // const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <article>
                <p>Profile</p>
                {user?.picture && <img src={user.picture} alt={user?.name} width='50px' length='100px' />}
                <h6>{user?.name}</h6>
                <ul>
                    {Object.keys(user).map((objKey, i) => {
                        if (i > 0) {
                            return null; // Skip rendering this key
                        }
                        return <li key={i}> Username : {user[objKey]}</li>;
                    })}
                </ul>
            </article>
        )
    );


}

export default Profile