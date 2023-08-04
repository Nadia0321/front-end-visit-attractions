import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <article>
                {user?.picture && <img src={user.picture} alt={user?.name} width='50px' length='100px' />}
                <h6>{user?.name}</h6>
                {/* <u1>
                    {Object.keys(user).map((objKey, 1))}
                </u1> */}

            </article>
        )
    )

}

export default Profile