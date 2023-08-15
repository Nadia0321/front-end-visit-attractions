import React from "react";
import styles from './Profile.module.css'

const Profile = ({ user, isAuthenticated }) => {

    return (
        isAuthenticated && (
            <article className={styles.profile}>
                {user?.picture && <img
                    src={user.picture}
                    alt={user?.name}
                    className={styles.profilePic}
                    width='80rem'
                    length='80rem' />}
                <h6 className={styles.username}>{user?.name}</h6>
                <ul>
                    {Object.keys(user).map((objKey, i) => {
                        if (i > 0) {
                            return null; // Skip rendering this key
                        }
                        // return <li className={styles.userName} key={i}>{user[objKey]}</li>;
                    })}
                </ul>
            </article>
        )
    );


}

export default Profile