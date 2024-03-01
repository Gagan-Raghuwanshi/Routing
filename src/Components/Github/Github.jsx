import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData();

    // const [data,setdata] = useState([]);

    // useEffect(() => {
    // fetch('https://api.github.com/uses/hiteshchoudhari')
    // .then((res)=>{res.json()})
    // .then((data)=>{
    //     console.log(data);
    //     setdata(data)

    // })
    // }, [])
    
  return (
    <>
    <div  className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>
         Gitgub Followers? :200     {data.followers}
        {/* <img className='' src={'data.avatar_url'} alt="Git picture" width = {300} /> */}

    </div>
      
    </>
  )
}

export default Github

export const githubInfoLoader = async () =>{
     const respons = await fetch('https://api.github.com/uses/hiteshchoudhari');
     return respons.json()
}