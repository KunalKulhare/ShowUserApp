import React, {useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../features/userDetailSlice";
import Bookemark from "./Bookemark";
import { useNavigate } from "react-router-dom";

const Showuser = (props) => {

  const [id, setId] = useState()
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1);


  const [show , setShow] = useState(false)

    const dispatch = useDispatch()
    // const {data, searchData} = useSelector((state)=> {
    //   console.log(state.app);
    //   return state.app
    // });
    const data = useSelector((state)=> {
      console.log(state.app);
      return state.app
    });

  const recordsPage = 5
  const lastIndex = currentPage * recordsPage;
  const firstIndex =lastIndex - recordsPage;
  const records = data.users.slice(firstIndex, lastIndex)
  const npage = Math.ceil(data.users.length / recordsPage)
  const number  = [...Array(npage + 1 ).keys()].slice(1)
    
    useEffect(() => {
        dispatch(getAllData())
    }, []);

    if(data.loading){
        return <h2>Loading...</h2>
    }
    function nextPage(){
      if(changeCPage !== lastIndex){
        setCurrentPage(currentPage + 1);
      }

    }

    function prePage(){
      if(currentPage !== firstIndex){
        setCurrentPage(currentPage - 1)
      }

    }
    function changeCPage(id){
      setCurrentPage(id)

    }

  return (
    <div>
{  show &&  <Bookemark id={id} setShow={setShow}/>
}      <table className="table w-50  mx-auto my-5" >
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">User name</th>
            <th scope="col">Image</th>
            <th scope="col">Bookmark</th>
          </tr>
        </thead>
        <tbody>
        {records && records.filter((ele)=>{
          if(data.searchData.length === 0){
            return ele
          }else ele.login.toLowerCase().includes(data.searchData.toLowerCase())
        }).map((ele)=> (
          <tr key={ele.id}>
             <td>{ele.id}</td>
            <td>{ele.login}</td>
            <td>{ele.avatar_url == null || <img src={ele.avatar_url} className="img-fluid" style={{ maxWidth: '5rem' }} alt="image" />}</td>
            <button onClick={()=> [setId(ele.id), setShow(true)] }>View</button>

           
          </tr>
        ))}
          
        </tbody>
        <nav aria-label="Page navigation example mx-auto my-5">
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>prev</a>
          </li>
          {
            number.map((n, i) => {
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
              <a href="#" className="page-link" onClick={()=>changeCPage(n)} >{n}</a>
              </li>
            })
          }
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>next</a>
          </li>
        </ul>
      </nav>
      </table>
      
    </div>
  );
};


export default Showuser;
