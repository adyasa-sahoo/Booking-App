import React from "react";
import Navbar from "../../Component/Navbar";
import Head from "../../Component/Head";
import Featured from "../../Component/Featured";
import  "./home.css";

const Home = () => {
    return (
        <div>
            <Navbar/> 
            <Head/>
            <div className="homecontainer">
                <Featured/>
            </div>
        </div>
    );
}

export default Home;
