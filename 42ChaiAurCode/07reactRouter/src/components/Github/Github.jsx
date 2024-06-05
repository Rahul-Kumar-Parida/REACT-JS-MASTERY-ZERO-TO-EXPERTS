// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Rahul-Kumar-Parida")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="git Picture" width={300} />
    </div>
  );
}

export default Github;


//Loader Concept
export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/Rahul-Kumar-Parida"
  );
  return response.json();
};
