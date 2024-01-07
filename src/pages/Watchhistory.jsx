import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistory, getAllWatchHistory } from '../services/allAPI'

function Watchhistory() {
  const [history, setHistory]= useState([])
  async function watchHistory(){
    const response = await getAllWatchHistory();
    const {data} = response;
    console.log("===watch history===")
    console.log(data)
    setHistory(data)
  }
  useEffect(() => {
    watchHistory();
  },[])

  const handleDelete = async(id)=>{
    await deleteWatchHistory(id);
    watchHistory();
  }
  return (
    <>
    <div className='container mt-5 d-flex justify-content-between'>
      <h3>Watch History</h3>
      <Link to={'/home'} style={{textDecoration:"none", color:"white", fontSize:"15px", fontWeight:"600"}}>
      <i class="fa-solid fa-arrow-left me-3"></i>Back To Home      
      </Link>
    </div>

    <table className='table container mb-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Url</th>
          <th>TimeStamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          history.length>0?
          history.map((item,index)=>(
            <tr>
              <td>{index+1}</td>
              <td>{item.caption}</td>
              <td>{item.embededLink}</td>
              <td>{item.timestamp}</td>
              <td><button className='btn btn-danger' onClick={()=>handleDelete(item.id)}><i class="fa-solid fa-trash"></i></button></td>
        
        </tr>

          ))
          :
          <p>No watch history found</p>
        }
        
      </tbody>
    </table>
    </>
  )
}

export default Watchhistory