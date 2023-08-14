import { useAuth0 } from "@auth0/auth0-react";
import styles from './Btns.module.css'

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button
                className={`${styles.btn} ${styles.logOut}`}
                onClick={() => logout()}>
                Logout
            </button>

        )
    )

}

export default LogoutButton