import React from "react";
import { useSelector } from "react-redux";
import "./Bookmark.css";


function Bookemark({id, show, setShow}) {
    const allusers = useSelector((state) => state.app.users);
    const singleUser = allusers.filter((ele) => ele.id === id);
  console.log("singleuser", singleUser);
  return (
    <div>
      <table className="table w-50  mx-auto my-5" >
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">User name</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        <tr>
        <td>{singleUser[0].id}</td>
        <td>{singleUser[0].login}</td>
        <td>{singleUser[0].avatar_url == null || <img src={singleUser[0].avatar_url} className="img-fluid" style={{ maxWidth: '5rem' }} alt="image" />}</td>
        <button onClick={()=> setShow(false)}>close</button>

        </tr>
        </tbody>
      </table>
      
    </div>
  )
}

export default Bookemark
