import { useEffect } from "react";
import { useState } from "react";
import NewSongForm from "./NewSongForm";
import { v4 as uuidv4 } from 'uuid';

// moj pokusaj
// const SongList = () => {
//     const [state, setState] = useState();

//     useEffect(() => {
//         setState([
//             {title: `title 1`, id: `1`},
//             {title: `title 2`, id: `2`},
//             {title: `title 3`, id: `3`}
//         ])
//     }, [])

//     return <>
//         {/* <ul>
//             {state.map((s) => {
//                 return <li key={s.id}>{s.title}</li>
//             })}
//         </ul> */}
//     </>

// }

// uradjeno


const SongList = () => {
    const [songs, setSongs] = useState([]);
// title id
    const addSong = (title) => {
        // localStorage.setItem(`songs`, JSON.stringify(songs));
        // setSongs(prevState => [...prevState, {title: title, id: uuidv4()}]);
        let songId = uuidv4();
    }

    

    useEffect(() => {
        setSongs(JSON.parse(localStorage.getItem(`songs`)));
        // setSongs([
        //     {id: 1, title: `song 1`},
        //     {id: 2, title: `song 2`},
        //     {id: 3, title: `song 3`},
        // ])
    }, []);

    useEffect(() => {
        localStorage.setItem(`songs`, JSON.stringify(songs));
    }, [songs])

    return <>
    {
        songs.map(song => <li key={song.id}>{song.title}</li>)
    }
    <NewSongForm addSong={addSong} />
    </>

};

export default SongList;