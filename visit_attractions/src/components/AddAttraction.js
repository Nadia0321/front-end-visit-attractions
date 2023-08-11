import { useState } from "react"


const AddAttraction = ({ onPostAttr, placeIdState }) => {
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
        uploadData.append("place_id", placeIdState);
        uploadData.append("image", coverPhoto);
        onPostAttr(uploadData)
        setNameState("")

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">State Name:</label>
                <input type="text" id='name' name='name' value={nameState} onChange={handleName} />
            </div>
            <div>
                <label htmlFor="coverPhoto">the image:</label>
                <input type="file" id='coverPhoto' name='coverPhoto' onChange={handleCoverPhoto} />
            </div>
            <div><input type="submit" value="Post"></input></div>
            <br /><br /><br />
        </form>

        // <br/>
    )
}

export default AddAttraction