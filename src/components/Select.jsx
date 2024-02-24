import { useState, useEffect } from "react";

const Select = () => {
    const [state, setState] = useState(`posts`);
    const [items, setItems] = useState([]);

    const handleChange = (e) => {
        setState(e.target.value);
        /* // ovo ispod ne radi, izgleda da ne moze useEffect u useState
        useEffect(() => {
            if(e.target.value === `posts`) {
                fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json().then(json => setItems(json)))
                .then(items.forEach(item => {
                    console.log(item.title);
                }))
            }
            
        }, [])
        */
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${state}`)
        .then(response => response.json().then(json => setItems(json)))
    }, [state]); //gledaj state - kada se desi update state, ti pozovi, [state]

    return <div>
        <select value={state} onChange={handleChange}>
            <option value="posts">Posts</option>
            <option value="comments">Comments</option>
            <option value="albums">Albums</option>
        </select>
        <ul>
            {items.map(item => {
                // return <li key={item.id}>{item.title}</li>
                return <li key={item.id}>{JSON.stringify(item)}</li>
            })}
        </ul>
    </div>

}


export default Select;