import { useState } from "react"
import './AddAttraction.css'

const AddAttraction = ({ onPostAttr, placeIdState, user }) => {
    const [nameState, setNameState] = useState("")
    const [coverPhoto, setCoverPhoto] = useState(null)
    const [description, setDescription] = useState("")


    const handleName = (event) => {
        const newName = event.target.value
        setNameState(newName)
    }

    const handleDescription = (event) => {
        const newDescription = event.target.value
        setDescription(newDescription)
    }

    const handleCoverPhoto = (event) => {
        const newCoverPhoto = event.target.files[0]
        setCoverPhoto(newCoverPhoto)
    }

    const handleSubmit = (event) => {
        console.log(coverPhoto)
        event.preventDefault();

        const uploadData = new FormData();
        uploadData.append("name", nameState);
        uploadData.append("description", description);
        uploadData.append("place_id", placeIdState);
        uploadData.append("created_by", user.sub);
        uploadData.append("image", coverPhoto);
        onPostAttr(uploadData)
        setNameState("")
        setDescription("")
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="lable" >Attraction Name:</label>
                <input type="text" id='name' name='name' value={nameState} onChange={handleName} className="input" />
            </div>
            <div>
                <label htmlFor="description" className="lable" >Description:</label>
                <textarea type="text" id='description' name='description' value={description} onChange={handleDescription} className="input" />
            </div>
            <div>
                <label htmlFor="coverPhoto" lassName="lable">the image:</label>
                <input type="file" id='coverPhoto' name='coverPhoto' onChange={handleCoverPhoto} />
            </div>
            <div><input type="submit" value="Post" className="submit-btn"></input></div>
            <br /><br /><br />
        </form>
    )
}

export default AddAttraction