import {useState, useEffect} from 'react';

function Counter(props)
{   
    const [countValue, setCountValue] = useState(props.initialValue);

    function incrementCountValue() {
        setCountValue(countValue + props.interval);
    }

    function decrementCountValue() {
        setCountValue(countValue - props.interval);
    }

    useEffect(
        () => {
            localStorage.setItem("count", countValue);
        }, [countValue]
    )

    return (
        <div>
            <p>{countValue}</p>
            <button onClick={incrementCountValue}>+</button>
            <button onClick={decrementCountValue}>-</button>
        </div>
    );
}

export default Counter;
