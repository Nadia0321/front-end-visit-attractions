import { useState } from "react"
import './AddPlace.css'

const AddPlace = ({ onPostPlaces }) => {
    const [nameState, setNameState] = useState("")
    const [coverPhoto, setCoverPhoto] = useState(null)


    const handleName = (event) => {
        const newName = event.target.value
        setNameState(newName)
    }

    const handleCoverPhoto = (event) => {
        const newCoverPhoto = event.target.files[0]
        setCoverPhoto(newCoverPhoto)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const uploadData = new FormData();
        uploadData.append("name", nameState);
        uploadData.append("image", coverPhoto);
        onPostPlaces(uploadData)
        setNameState("")

    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div>
                <label htmlFor="name" className="lable" >State Name:</label>
                <input type="text" id='name' name='name' value={nameState} onChange={handleName} className="input" />
            </div>
            <div>
                <label htmlFor="coverPhoto" className="lable" >the image:</label>
                <input type="file" id='coverPhoto' name='coverPhoto' onChange={handleCoverPhoto} className="input" />
            </div>
            <div><input type="submit" value="Post" className="submit-btn" /></div>
        </form>

    )
}

export default AddPlace