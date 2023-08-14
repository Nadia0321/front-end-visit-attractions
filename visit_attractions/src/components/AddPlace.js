import { useState } from "react"


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
        <form onSubmit={handleSubmit}>
            <div>
                <lable htmlFor="name">State Name:</lable>
                <input type="text" id='name' name='name' value={nameState} onChange={handleName} />
            </div>
            <div>
                <lable htmlFor="coverPhoto">the image:</lable>
                <input type="file" id='coverPhoto' name='coverPhoto' onChange={handleCoverPhoto} />
            </div>
            <div><input type="submit" value="Post" /></div>
            <br /><br /><br />
        </form>

        // <br/>
    )
}

export default AddPlace