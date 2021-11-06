import { useState, useEffect, useCallback } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const getData = useCallback(async () => {
        // const abortCont = new AbortController();
        try {
            const response = await fetch(url, {
                // signal: abortCont.signal,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setData(data);
            setError(null);
        } catch (error) {
            setError(error.message);
        }
        setIsPending(false);
    }, [url]);

    useEffect(() => {
        getData();
        // return () => abortCont.abort();
    }, [getData]);

    return { data, isPending, error };
};

export default useFetch;
