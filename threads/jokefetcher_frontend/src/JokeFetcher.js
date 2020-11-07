import { useState } from 'react';
const URL = "http://localhost:8080/jokeFetcher/api/jokes";

export function JokeFetcher() {

    const [joke1, setJoke1] = useState([]);
    const [joke1Reference, setJoke1Reference] = useState([]);
    const [joke2, setJoke2] = useState([]);

    function getJoke() 
    {
        var opts = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        }
        fetch(URL, opts)
        .then(res => res.json())
        .then(data => {
            setJoke1(data.joke1);
            setJoke1Reference(data.joke1Reference);
            setJoke2(data.joke2);
        })
    }

    return (
        <div>
            <button onClick={getJoke}>Get Joke</button>
            <p>{joke1}</p>
            <p>{joke1Reference}</p>
            <p>{joke2}</p>
        </div>
    )
}

export default JokeFetcher;