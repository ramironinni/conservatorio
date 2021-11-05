import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        const getData = async () => {
            const response = await fetch(url, {
                signal: abortCont.signal,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        };

        getData()
            .then((data) => {
                setData(data);
                setError(null);
                setIsPending(false);
                console.log(data);
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
