import { useAuth0 } from "@auth0/auth0-react";
import styles from './Btns.module.css'

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button
                className={`${styles.btn} ${styles.logOut}`}
                onClick={() => logout({
                    returnTo: window.location.origin
                    // clientID:
                })}>
                Logout
            </button>

        )
    )

}

export default LogoutButton
// webAuth.logout({
//   returnTo: 'some url here',
//   clientID: 'some client ID here'
// });