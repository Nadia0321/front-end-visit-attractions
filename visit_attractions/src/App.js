import { useEffect, useState } from 'react';
import './App.css';
import PlaceList from './components/PlaceList'
import AttractionList from './components/AttractionList';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react";


const kBaseURL = "https://back-end-visit-attraction.onrender.com";

const getAllPlaces = () => {
  return axios
    .get(`${kBaseURL}/places`)
    .then(response => { return response.data })
    .catch(error => { console.log(error) })
}

const getAllAttractions = (placeID) => {
  return axios
    .get(`${kBaseURL}/places/${placeID}/attractions`)
    .then((response) => {
      return response.data.attractions.map(convertAttrFromAPI);
    })
    .catch((error) => console.log("Error in Fetching Attractions", error.message));
};

const convertAttrFromAPI = (apiPlaces) => {
  const { id, name, likes, dislike, description, favorite, image, place_id } = apiPlaces;
  const newPlaces = { id, name, likes, dislike, description, favorite, image, placeID: place_id };
  return newPlaces
}

// ==============================================================================================
function App() {
  // const [loginUser, setLoginUser] = useState({})
  // const [isLogin, setIsLogin] = useState(false)
  // const [userData, setUserData] = useState({ name: '', username: '', email: '' })
  const [commentData, setCommentData] = useState([])
  const [placeIdState, setPlaceIdState] = useState("")
  const [placeData, setPlaceData] = useState([])
  const [attrData, setAttrData] = useState([])
  const [unmodifiedAttrData, setunmodifiedAttrData] = useState([])
  const [unmodifiedPlaceData, setUnmodifiedPlaceData] = useState([])
  const { user, isAuthenticated } = useAuth0();

  // console.log("isAthenticated", isAthenticated)


  const fetchPlaces = () => {
    getAllPlaces()
      .then((places) => {
        setPlaceData(places.places)
        setUnmodifiedPlaceData(places.places)
      });
  };

  const fetchAttractions = (placeID) => {
    getAllAttractions(placeID)
      .then((attractions) => {

        setAttrData(attractions)
        setunmodifiedAttrData(attractions)
        setPlaceIdState(placeID)
      });
  };


  useEffect(() => {
    fetchPlaces();
  }, []);

  const onHandleSubmitPlace = (searchedPlace) => {

    setPlaceData(unmodifiedPlaceData.filter((place) => {
      const lowerName = place.name.toLowerCase()
      const lowerSearch = searchedPlace.toLowerCase()
      return lowerName.includes(lowerSearch)
    }))
  }

  const onHandleSubmitAttr = (searchedAttr) => {

    setAttrData(unmodifiedAttrData.filter((attr) => {
      const lowerName = attr.name.toLowerCase()
      const lowerSearch = searchedAttr.toLowerCase()
      return lowerName.includes(lowerSearch)
    }))
  }

  const onLikeClick = (id) => {
    setAttrData(() => attrData.map((attr) => {
      if (attr.id === id) {
        return { ...attr, likes: attr.likes + 1 };
      } else {
        return attr;
      };
    }));

    axios
      .patch(`${kBaseURL}/places/${placeIdState}/attractions/${id}/like/`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  const onDislikeClick = (id) => {
    setAttrData(() => attrData.map((attr) => {
      if (attr.id === id) {
        return { ...attr, dislike: attr.dislike + 1 };
      } else {
        return attr;
      };
    }));

    axios
      .patch(`${kBaseURL}/places/${placeIdState}/attractions/${id}/dislike/`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  const onFavoriteClick = (id) => {
    setAttrData(() => attrData.map((attr) => {
      if (attr.id === id) {
        return { ...attr, favorite: !attr.favorite }
      } else {

        return attr
      };

    }));

    axios
      .patch(`${kBaseURL}/places/${placeIdState}/attractions/${id}/favorite/`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  const sortData = (selectedValue) => {
    console.log(selectedValue)
    let sortedData
    if (selectedValue === 'Popular') {
      sortedData = [...attrData].sort((a, b) => b.likes - a.likes)
      console.log(attrData)
    } else {
      sortedData = [...attrData].sort((a, b) => a.name.localeCompare(b.name))
      console.log(attrData)
    }
    setAttrData(sortedData)
  }


  const getAllComments = (placeIdState, id) => {
    console.log(id)
    return axios
      .get(`${kBaseURL}/places/${placeIdState}/attractions/${id}/comment/`)
      .then((res) => {

        return res.data
      })
      .catch(err => console.log(err))
  }
  const fetchComments = (id) => {
    getAllComments(placeIdState, id)
      .then((res) => {
        setCommentData(res.comments.map((comment) => {
          return {
            name: comment.username,
            comment: comment.description
          }
        }))
        console.log("in app2", res.comments)
      })
  }



  const onHandleSubmitComment = (id, data) => {
    console.log(placeIdState, id)
    axios
      .post(`${kBaseURL}/place/${placeIdState}/attraction/${id}/comment/`, data)
      .then(res => {
        console.log("onhandle", res.data)
        setCommentData((pre) => [res.data, ...pre])
      })
      .catch((e) => console.log(e))

  }

  const onPostPlaces = (uploadData) => {

    axios.post(`${kBaseURL}/place/`, uploadData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(res => {
        console.log("New place created:", res.data);
        setPlaceData((pre) => [res.data, ...pre])
      })
      .catch(error => {
        console.error("Error creating new place:", error);
      });

  }

  const onPostAttr = (uploadData) => {

    axios.post(`${kBaseURL}/place/${placeIdState}/attractions/`, uploadData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(res => {
        console.log("New Attr created:", res.data);
        setAttrData((pre) => [res.data, ...pre])
      })
      .catch(error => {
        console.error("Error creating new Attraction:", error);
      });

  }



  const locations = ['New York', 'State College', 'Washington D.C.'];


  return (
    <div className="App">
      <header className="App-header">
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgCSWniXtWJQqrfI-PLim7gOQjZbJfkB8&libraries=places"></script>
      </header>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/login' element={<Login loginUser={loginUser} />} />
          <Route path='/SignUp' element={<SignUp onHandleValue={onHandleValue} handleSubmit={handleSubmit} userData={userData} />} /> */}

          <Route path='/' element={
            <PlaceList placeData={placeData} onHandleSubmitPlace={onHandleSubmitPlace} onPostPlaces={onPostPlaces} user={user} isAuthenticated={isAuthenticated} />} />

          <Route path='/attractions/:id' element={
            <AttractionList
              attrData={attrData} onLikeClick={onLikeClick} onDislikeClick={onDislikeClick} onFavoriteClick={onFavoriteClick}
              onHandleSubmitAttr={onHandleSubmitAttr} fetchAttractions={fetchAttractions} sortData={sortData} getAllComments={getAllComments} onHandleSubmitComment={onHandleSubmitComment} fetchComments={fetchComments} commentData={commentData} onPostAttr={onPostAttr} placeIdState={placeIdState} user={user} isAuthenticated={isAuthenticated} locations={locations} />} />
        </Routes>
      </BrowserRouter>
    </div >


  );
}

export default App;

