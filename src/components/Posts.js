import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import { getPosts } from "../states/PostSlice"

function Posts() {
  const dispatch = useDispatch()
  const {list,loading} = useSelector(state => state.Post)

  useEffect(() => {
    dispatch(getPosts())
  }, [])
  console.log(list);
if(loading){
  return <h1>Loadinggggggggggggggggggggggggggggg.....</h1>
}


  return ( 
    <div>
      { list.map((item, index) => {
        const { title, id } = item
        return (
          <div key={index} style={{
            width : "400px",
            padding: "10px",
            margin: "10px",
            backgroundColor: "grey"
          }}>
            <p>id : {id}</p>
            <p> title : {title} </p>
          </div>
        )
      })}
    </div>
  )
}


export default Posts;
