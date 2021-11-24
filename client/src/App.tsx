import React, { MouseEvent, useState, useEffect } from "react";
import "./App.css";
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";

const options: AxiosRequestConfig = {
  method: "GET",
  url: "https://priceline-com.p.rapidapi.com/hotels/city/search",
  params: { q: "Seattle" },
  headers: {
    "x-rapidapi-host": "priceline-com.p.rapidapi.com",
    "x-rapidapi-key": "e036230438mshd38f8142450c431p135b4fjsndb7c9a568923",
  },
};

function App() {
  const [count, setCount] = useState<number>(0);

  const changeCount = (event: MouseEvent<HTMLButtonElement>) => {
    const newCount: number = count + 1;
    setCount(newCount);
  };

  useEffect(() => {
    axios
      .request(options)
      .then((response: AxiosResponse) => {
        console.log(response.data);
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Este es un Header</h1>
      <p>{count}</p>
      <button className="addBtn" onClick={changeCount}>
        Add
      </button>
    </div>
  );
}

export default App;
