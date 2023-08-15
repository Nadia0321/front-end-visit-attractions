import React, { useState } from 'react'
import SearchBarPlace from './SearchBarPlace'
import styles from './Sidebar.module.css'
import Profile from './Authentication/Profile'
import LoginButton from './Authentication/LoginButton'
import LogoutButton from './Authentication/LogoutButton'
import { useLocation } from 'react-router-dom'
import styles2 from './Authentication/Btns.module.css'
import AddPlace from './AddPlace'
import Favorite from './Favorite'
import AddAttraction from './AddAttraction'
import SearchBarAttr from './SearchBarAttr'



const Sidebar = ({ user, onPostPlaces, isAuthenticated, attrData, onHandleFavorite, onShowAll, onPostAttr, placeIdState, onHandleSubmitPlace, onHandleSubmitAttr }) => {

    const [showAddPlaceForm, setShowAddPlaceForm] = useState(false);
    const [showAddAttrForm, setShowAddAttrForm] = useState(false);
    const location = useLocation();





    const toggleAddAttrForm = () => {
        setShowAddAttrForm(!showAddAttrForm);
    }

    const closeAddAttrForm = () => {
        setShowAddAttrForm(!showAddAttrForm);
    }
    const toggleAddPlaceForm = () => {
        console.log("showAddPlaceForm", !showAddPlaceForm)
        setShowAddPlaceForm(!showAddPlaceForm);
        console.log("I am in toggle add place form")
    }

    const closeAddPlaceForm = () => {
        setShowAddPlaceForm(false);
    }

    return (
        <aside className={styles.sideBar}>

            {location.pathname.match(/\/attractions\/\d+/) && <SearchBarAttr onHandleSubmitAttr={onHandleSubmitAttr} />}
            {location.pathname === "/profile" && <SearchBarAttr onHandleSubmitAttr={onHandleSubmitAttr} />}
            {location.pathname === "/" && <SearchBarPlace onHandleSubmitPlace={onHandleSubmitPlace} />}

            <Profile onPostPlaces={onPostPlaces} user={user} isAuthenticated={isAuthenticated} />
            <LoginButton user={user} />

            <div>
                {isAuthenticated && location.pathname === "/" && (
                    <div>
                        <button
                            className={`${styles2.btn} ${styles2.addBtn}`}
                            onClick={toggleAddPlaceForm}>Add Place</button>
                        {showAddPlaceForm && (
                            <div>
                                <AddPlace onPostPlaces={onPostPlaces} />
                                <p onClick={closeAddPlaceForm}>X</p>
                            </div>)}
                    </div>

                )}
            </div>


            <div>
                {isAuthenticated && location.pathname.match(/\/attractions\/\d+/) && (
                    <div>
                        <Favorite attrData={attrData} user={user} onHandleFavorite={onHandleFavorite} onShowAll={onShowAll} />
                        <button onClick={toggleAddAttrForm}>Add attraction</button>
                        {showAddAttrForm && (
                            <div>
                                <p onClick={closeAddAttrForm}>X</p>
                                <AddAttraction onPostAttr={onPostAttr} placeIdState={placeIdState} user={user} />
                            </div>)}
                    </div>
                )}
            </div>

            <LogoutButton user={user} />
        </aside >
    )
}

export default Sidebar