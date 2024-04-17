import React, { useState } from "react";

export default function useArrayTwo(initialValue) {
  const [array, setArray] = useState(initialValue);

  const push = (elem) => {
    setArray([...array, elem]);
  };
  const remove = (index) => {
    setArray(array.filter((_, i) => i !== index));
  };
  const update = (index, value) => {
    setArray(array.map((elem, i) => (i === index ? value : elem)));
  };
  const clear = () => {
    setArray([]);
  };
  const filter = (n) => {
    setArray(array.filter(n));
  };
  const set = (arr) => {
    setArray((arr = [1, 2]));
  };

  return [array, { set, push, remove, filter, update, clear }];
}
