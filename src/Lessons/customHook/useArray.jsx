import React, { useEffect, useState } from 'react'

export default function useArray({ count = 18, min = 0, max = 54 }) {

  const [data, setData] = useState(() => {
    return new Array(count).fill().map(() => Math.round(Math.random() * (max - min) + min))
  });

  const sort = () => setData(data.toSorted((a, b) => a - b))
  return [data, { sort }]
}
