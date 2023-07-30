import { useState } from 'react';
import './App.css';
import PlaceList from './components/PlaceList'
import AttractionList from './components/AttractionList';

const DATA = [
  {
    'placeID': 1,
    'name': 'New York',
    'image': 'an image',
    'description': 'some text',
    'country': 'USA',
    'state': 'New York',
    'userID': 1
  },
  {
    'place_id': 2,
    'name': 'Georgia',
    'image': 'an image',
    'description': 'some text',
    'country': 'USA',
    'state': 'Georgia',
    'user_id': 1
  },

]

const attrDATA = [
  {
    'id': 1,
    'name': 'Liberty',
    'likes': 0,
    'places': 1,
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
    'places': 1,
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
    'places': 1,
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
    'places': 1,
    'image': 'something',
    'description': 'something',
    'dislike': 0,
    'favorite': false,
    'user_id': 1
  }
]

function App() {
  // const [placeData, setPlaceData] = useState(DATA)
  // const [like, setLike] = useState(0)
  const [attrData, setAttrData] = useState(attrDATA)

  const onLikeClick = (id) => {
    setAttrData(() => attrData.map((attr) => {
      if (attr.id === id) {
        return { ...attr, likes: attr.likes + 1 };
      } else {
        return attr;
      }

    }))


  }

  return (
    <body className="App">
      <header className="App-header">

      </header>
      <main>
        <PlaceList placeData={DATA} />
        {/* <AttractionList attrData={attrData} onLikeClick={onLikeClick} /> */}
      </main>
    </body>
  );
}

export default App;
