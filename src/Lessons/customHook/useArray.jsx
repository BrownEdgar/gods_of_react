import React, { useState } from "react";

export default function useArray({ count = 18, min = 0, max = 54 }) {
  const [dataArr, setDataArr] = useState(() => {
    return new Array(count).fill().map(() => Math.round(Math.random() * (max - min) + min))
  });

  
  const sort = () => setDataArr(dataArr.toSorted((a, b) => a - b));

  return [dataArr,  {sort} ];
}
