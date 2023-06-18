import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailSlice";

const Navbar = () => {
  const allusers = useSelector((state) => state.app.users);
  const dispatch = useDispatch()
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    dispatch(searchUser(searchData))
  
  }, [searchData]);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h2 class="navbar-brand">
            User Profile
          </h2>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link to='/' className="nav-link">
              user Data Show ({allusers.length})
              </Link>
              </li>
              <li class="nav-item">
              <Link to='/bookmark' className="nav-link">
              Bookmark
              </Link>
              </li>
            </ul>
              <input
                class="form-control me-2 w-50"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchData}
                onChange={(e)=> setSearchData(e.target.value)}
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
