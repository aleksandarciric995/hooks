import { useState } from "react";
import { useEffect } from "react";


// moj pokusaj
// const NewSongForm = () => {

//     const [naslov, setNaslov] = useState(``);

//     const handleChange = (e) => {
//         setNaslov(e.target.value);
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     }

//     return <form onSubmit={handleSubmit}>
//         <input value={naslov} onChange={handleChange}></input>
//         <button type="submit">Submit</button>
//     </form>

// }

    const NewSongForm = (props) => {
        const {addSong} = props;
        const [title, setTitle] = useState(``);

        const handleSubmit = (e) => {
            e.preventDefault();

            props.addSong(title);
            setTitle(``);
        }

        return <>
        <form onSubmit={handleSubmit}>
        <h3>Song name:</h3>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button type="submit">add song</button>
        </form>
        </>
    }


export default NewSongForm;