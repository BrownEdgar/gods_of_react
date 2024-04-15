import axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function useFetchData({ url, limit, start }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    axios(url, {
      params: {
        _limit: limit || null,
        _start: start || 0
      }
    })
      .then(res => {
        setData(res.data)
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [url, limit, start])

  return [data, loading, error]
}
