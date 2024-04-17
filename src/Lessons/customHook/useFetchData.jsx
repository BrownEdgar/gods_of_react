import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useFetchData({ url, limit }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios(url, {
      params: {
        _limit: limit || null,
      },
    })
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url, limit]);

  return [data, loading, error];
}
