import React, { useEffect } from 'react'
import axios from 'axios'

export const CrudAlojamiento = () => {

    useEffect(()=>{
        axios.get('http://localhost:5500/')
        .then(res=> console.log(res))
        .catch(err => console.log(err));
    })
  return (
    <></>
  )
}
