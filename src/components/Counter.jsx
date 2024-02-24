import { useState, useEffect } from "react";

const initialFunc = () => {
    // console.log(`run function`);
    return 0;
}

const Counter = () => {
//    const [counter, setCounter] = useState(0);
const [counter, setCounter] = useState(initialFunc()); // moze i ovako da se uradi gornja linija, da se pozove funkcija kao props

// renderuje se pri svakoj promeni odnosno renderovanju (mount, update, unmount)
    useEffect(() => {
        console.log(`render`);
    })

    // samo jednom se izvrsava kada se komponenta upisala u dom
    useEffect(() => {
        console.log(`component did mount`);
    }, []);


    useEffect(() => {
        console.log(`component did update`);
    }, [counter]);


    // kada se komponenta izbrise iz doma
    // npr. cancelling network request, ciscenje nekog state-a
    useEffect(() => {

        console.log(`hello world`);
        return () => {
        console.log(`component did unmount`);
    }
    }, []);


// ovo se zove React.Fragment <>
    return <> 
    <button onClick={() => setCounter(counter - 1)}>-</button>
    <span>{counter}</span>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export default Counter;