import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        const getData = async () => {
            try {
                const response = await fetch(url, {
                    signal: abortCont.signal,
                });
                const data = await response.json();
                return data;
            } catch (error) {
                throw Error(error);
            }
        };

        getData()
            .then((data) => {
                setData(data);
                setError(null);
                setIsPending(false);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            });

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;
