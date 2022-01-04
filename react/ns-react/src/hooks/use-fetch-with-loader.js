import { useEffect, useState } from "react";

const useFetchWithLoader = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoading(false);
        });
    }, [url]);

    return [data, loading];
}

export default useFetchWithLoader;
