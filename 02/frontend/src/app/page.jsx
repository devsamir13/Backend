'use client';
import Image from "next/image";
import { useState, useEffect, use } from "react";
import axios from "axios";

export default function Home() {
  const [joke, setJoke] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3000/jokes')
    .then((response) => {
      setJokes(response.data);
    })
    .catch((error) => {
      console.log(error);
      
    })
  })

  return (
    <div>
      <h1>Chai and full stack</h1>
      <p>JOKES: {joke.length}</p>
    </div>
  );
}
