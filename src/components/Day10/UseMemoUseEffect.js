import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const UseMemoUseEffect = () => {
  const [data, setData] = useState(null);

  // Memoized Axios GET request
  const fetchData = useMemo(() => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData;
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [fetchData]);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UseMemoUseEffect;
