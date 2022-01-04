// The name of a custom hook must always start with the string 'use'

import { useEffect, useState } from "react";

const useCounter = (isPositive = true) =>  {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            isPositive ? setCount((count) => count + 1) : setCount((count) => count - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return count;
}

export default useCounter;
