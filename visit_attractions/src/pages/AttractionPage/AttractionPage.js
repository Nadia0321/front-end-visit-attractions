// import AttractionList from "../../components/AttractionList"
// import { useState } from "react"

// const attrDATA = [
//     {
//         'id': 1,
//         'name': 'Liberty',
//         'likes': 0,
//         'places': 1,
//         'image': 'something',
//         'description': 'something',
//         'dislike': 0,
//         'favorite': false,
//         'user_id': 1
//     },

//     {
//         'id': 2,
//         'name': 'Observation deck',
//         'likes': 0,
//         'places': 1,
//         'image': 'something',
//         'description': 'something',
//         'dislike': 0,
//         'favorite': false,
//         'user_id': 1
//     },
//     {
//         'id': 3,
//         'name': 'Central Park',
//         'likes': 0,
//         'places': 1,
//         'image': 'something',
//         'description': 'something',
//         'dislike': 0,
//         'favorite': false,
//         'user_id': 1
//     },

//     {
//         'id': 4,
//         'name': 'World center',
//         'likes': 0,
//         'places': 1,
//         'image': 'something',
//         'description': 'something',
//         'dislike': 0,
//         'favorite': false,
//         'user_id': 1
//     }
// ]


// const AttractionPage = () => {
//     const [attrData, setAttrData] = useState(attrDATA)
//     const onLikeClick = (id) => {
//         setAttrData(() => attrData.map((attr) => {
//             if (attr.id === id) {
//                 return { ...attr, likes: attr.likes + 1 };
//             } else {
//                 return attr;
//             }

//         }))


//     }
//     return (
//         <AttractionList attrData={attrData} onLikeClick={onLikeClick} />
//     )
// }

// export default AttractionPage