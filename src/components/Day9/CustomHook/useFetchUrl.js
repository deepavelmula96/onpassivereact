import React, { useEffect, useState } from 'react'

const useFetchUrl = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                console.log('response_before_json', response)
                const json = await response.json();
                console.log('response_after_json', json)
                setData(json);
            } catch (e) {
                console.log('error_fetchurl', e)
                setError("ur url is incorrect");
            }
            setLoading(false);
        }
        fetchData();
    }, [url]);
    return { data, loading, error };
}

export default useFetchUrl;