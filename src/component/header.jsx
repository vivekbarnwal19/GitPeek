import React from "react";
import SearchIcon from '../assets/images/searchicon.png'
import { getGithubUser } from "../api/api";
import { useState } from "react";

function Header(props) {

    const user = props.user;
    const setUser = props.setUser;
    const [name, setName] = useState(null)


    function users() {

        const userName = name?.trim();

        if (userName.length > 0) {

            getGithubUser(userName).then((res) => {
                if (res.message === "Not Found") {
                    alert(res.message)
                }
                else {
                    setUser(res)
                }
            })

        }
        else {
            alert("fill out something")
        }
    }

    function handleChange(e) {
        setName(e.target.value)
    }


    return (
        <>
            <div className="header-content">
                <img src={SearchIcon} width={"50px"} height={"50px"} alt="" />
                <input
                    type="text"
                    onChange={handleChange}
                    name="username"
                    placeholder="Search GitHub username..."
                    className="username-input"
                />
                <button className="search-btn" onClick={users} >Search</button>
            </div>
        </>
    )
}
export default Header