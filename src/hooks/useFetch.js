import { useState, useEffect } from 'react';

function useFetch(initialUrl) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  // Some magic happens here
  useEffect(() => {
    setLoading(true);
    setError(undefined);

    async function fetchData() {
      try {
        const res = await fetch(initialUrl);
        const json = await res.json();
        setData(json);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    }
    fetchData();
  }, [initialUrl]);

  return { data, error, loading };
}

export default useFetch;
