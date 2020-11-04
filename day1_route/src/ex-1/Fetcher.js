import { useEffect, useState } from 'react';
const URL1 = "https://api.chucknorris.io/jokes/random";
const URL2 = "https://icanhazdadjoke.com/";

export function JokeFetcher() {

    const [joke, setJoke] = useState('Click \'Get Chuck Norris Joke\'');
    const [dadJoke, setDadJoke] = useState('');

    function getChuckNorrisJoke() {
        fetch(URL1)
            .then(res => res.json())
            .then(data => {
                setJoke(data.value);
            })
    }

    function getDadJoke() {
        var opts = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        }
        fetch(URL2, opts)
        .then(res => res.json())
        .then(data => {
            setDadJoke(data.joke);
        })
    }

    useEffect(
        () => {
        const interval = setInterval(() => {
            getDadJoke()
        }, 10000)
        return () => {
            clearInterval(interval)
        }
        }, []
    )

    return (
        <div>
            <button onClick={getChuckNorrisJoke}>Get Chuck Norris Joke</button>
            <p>{joke}</p>

            <div>
                <h3>Dad joke</h3>
                <p>{dadJoke}</p>
            </div>
        </div>
    )
}