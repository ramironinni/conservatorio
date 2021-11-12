import { useCallback, useState } from 'react';

const useFetch = () => {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (url, config, applyData) => {
        // const abortCont = new AbortController();
        // const settings = config
        //     ? {
        //           ...config,
        //           // signal: abortCont.signal
        //       }
        //     : null;

        setIsPending(true);
        setError(null);

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                throw new Error(`Request failed! Status: ${response.status}`);
            }

            const data = await response.json();
            applyData(data);
            setError(null);
        } catch (error) {
            setError(error.message || 'Something went wrong!');
        }
        setIsPending(false);
    }, []);

    return { isPending, error, sendRequest };
};

export default useFetch;
