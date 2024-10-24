import React from "react";
import Navbar from "../../Component/Navbar";
import Head from "../../Component/Head";
import Featured from "../../Component/Featured";
import Proprty from "../../Component/Proprty";
import Featuredproperty from "../../Component/Featuredproperty";
import MailList from "../../Component/MailList";
import  "./home.css";


const Home = () => {
    return (
        <div>
            <Navbar/> 
            <Head/>
            <div className="homecontainer">
                <Featured/>
                <h1 className="hometitle">Property Type</h1>
                <Proprty/>
                <h1 className="hometitle">Home type</h1>
                <Featuredproperty/>
                <MailList/>
            </div>
        </div>
    );
}

export default Home;
