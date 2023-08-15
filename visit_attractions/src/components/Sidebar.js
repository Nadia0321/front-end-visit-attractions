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
import { AddAPhoto, Close } from '@mui/icons-material'
import Filter from './Filter'

const Sidebar = ({ user, onPostPlaces, isAuthenticated, attrData, onHandleFavorite, onShowAll, onPostAttr, placeIdState, onHandleSubmitPlace, onHandleSubmitAttr, sortData }) => {

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
            {location.pathname.match(/\/attractions\/\d+/) && <Filter sortData={sortData} />}
            <Profile onPostPlaces={onPostPlaces} user={user} isAuthenticated={isAuthenticated} />
            <LoginButton user={user} />

            <div>
                {isAuthenticated && location.pathname === "/" && (
                    <div>

                        <button
                            className={`${styles2.btn} ${styles2.addBtn}`}
                            onClick={toggleAddPlaceForm}>Add Place</button>
                        {showAddPlaceForm && (
                            <div className='whole-form'>
                                <Close onClick={closeAddPlaceForm} className='close-btn' />
                                {/* <p onClick={closeAddPlaceForm}>X</p> */}
                                <AddPlace onPostPlaces={onPostPlaces} />

                            </div>)}
                    </div>

                )}
            </div>


            <div>
                {isAuthenticated && location.pathname.match(/\/attractions\/\d+/) && (
                    <div>
                        <Favorite attrData={attrData} user={user} onHandleFavorite={onHandleFavorite} onShowAll={onShowAll} />
                        <div className={styles.icon_wrapper}>
                            <AddAPhoto onClick={toggleAddAttrForm} />Add Attraction
                        </div>

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