import React, { MouseEvent, useState, useEffect } from "react";
import "./App.css";
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import dotenv from 'dotenv'
dotenv.config()

const options: AxiosRequestConfig = {
  method: "GET",
  url: "https://priceline-com.p.rapidapi.com/hotels/city/search",
  params: { q: "Seattle" },
  headers: {
    "x-rapidapi-host": "priceline-com.p.rapidapi.com",
    "x-rapidapi-key": process.env.X_RAPIDAPI_KEY as string,
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
