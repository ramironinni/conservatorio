import { useState, useEffect, useCallback } from 'react';

const useFetch = (url, config) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const getData = useCallback(async () => {
        // const abortCont = new AbortController();
        const settings = {
            ...config,
            // signal: abortCont.signal
        };

        try {
            const response = await fetch(url, settings);

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
    }, [url, config]);

    useEffect(() => {
        getData();
        // return () => abortCont.abort();
    }, [getData]);

    return { data, isPending, error };
};

export default useFetch;
