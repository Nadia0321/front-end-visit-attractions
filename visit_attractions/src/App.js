import { useEffect, useState } from 'react';
import './App.css';
import PlaceList from './components/PlaceList'
import AttractionList from './components/AttractionList';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import axios from "axios"
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
// import { Link } from 'react-router-dom';
// import LoginButton from './components/Authentication/LoginButton';
// import LogoutButton from './components/Authentication/LogoutButton';

const DATA = [
  {
    'id': 1,
    'name': 'New York',
    // 'image': 'an image',
    'description': 'some text',
    'country': 'USA',
    'state': 'New York',
    // 'userID': 1
  },
  {
    'id': 2,
    'name': 'Georgia',
    // 'image': 'an image',
    'description': 'some text',
    'country': 'USA',
    'state': 'Georgia',
    // 'user_id': 1
  },

]

const attrDATA = [
  {
    'id': 1,
    'name': 'Liberty',
    'likes': 0,
    'placeID': 1,
    'image': 'something',
    'description': 'something',
    'dislike': 0,
    'favorite': false,
    'user_id': 1
  },

  {
    'id': 2,
    'name': 'Observation deck',
    'likes': 0,
    'placeID': 1,
    'image': 'something',
    'description': 'something',
    'dislike': 0,
    'favorite': false,
    'user_id': 1
  },
  {
    'id': 3,
    'name': 'Central Park',
    'likes': 0,
    'placeID': 1,
    'image': 'something',
    'description': 'something',
    'dislike': 0,
    'favorite': false,
    'user_id': 1
  },

  {
    'id': 4,
    'name': 'World center',
    'likes': 0,
    'placeID': 1,
    'image': 'something',
    'description': 'something',
    'dislike': 0,
    'favorite': false,
    'user_id': 1
  }
]

const kBaseURL = "http://localhost:8000";

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
  const { id, name, likes, dislike, description, favorite, place_id } = apiPlaces;
  const newPlaces = { id, name, likes, dislike, description, favorite, placeID: place_id };
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
  // const navigate = useNavigate()




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
        // console.log("in app1", res.data)
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
    axios
      .post(`${kBaseURL}/place/${placeIdState}/attraction/${id}/comment/`, data)
      .then(res => {
        setCommentData((pre) => [res.data, ...pre])
      })
      .catch((e) => console.log(e))

  }


  // ===============================================================
  // const onHandleValue = (event) => {
  //   const fieldName = event.target.name;
  //   const fieldValue = event.target.value;

  //   console.log(event.target.value)
  //   const newFormData = { ...userData, [fieldName]: fieldValue }

  //   setUserData(newFormData)
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const newUser = {
  //     name: userData.name,
  //     username: userData.username,
  //     email: userData.email,
  //   }
  //   console.log('new user:', newUser)
  //   onSubmitUser(newUser)
  //   setUserData({ name: '', username: '', email: '' })
  // }

  // const onSubmitUser = (data) => {
  //   return axios
  //     .post(`${kBaseURL}/users/`, data)
  //     .then((response) => {
  //       console.log(response.data)
  //       setUserData((prevData) => [...prevData, response.data])

  //       // navigate('/');
  //     })

  //     .catch((e) => console.log(e))
  // }



  return (
    <div className="App">
      <header className="App-header">

      </header>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/login' element={<Login loginUser={loginUser} />} />
          <Route path='/SignUp' element={<SignUp onHandleValue={onHandleValue} handleSubmit={handleSubmit} userData={userData} />} /> */}

          <Route path='/' element={
            <PlaceList placeData={placeData} onHandleSubmitPlace={onHandleSubmitPlace} />} />

          <Route path='/attractions/:id' element={
            <AttractionList
              attrData={attrData} onLikeClick={onLikeClick} onDislikeClick={onDislikeClick} onFavoriteClick={onFavoriteClick}
              onHandleSubmitAttr={onHandleSubmitAttr} fetchAttractions={fetchAttractions} sortData={sortData} getAllComments={getAllComments} onHandleSubmitComment={onHandleSubmitComment} fetchComments={fetchComments} commentData={commentData} />} />
        </Routes>
      </BrowserRouter>
    </div >


  );
}

export default App;

