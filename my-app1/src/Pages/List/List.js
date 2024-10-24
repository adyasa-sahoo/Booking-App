import React, { useState } from "react";
import "./list.css";
import Navbar from "../../Component/Navbar";
import Head from "../../Component/Head";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from 'date-fns';
import SearchItem from "../../Component/SearchItem";

const List = () => {
    const location = useLocation();
    console.log(location);
    
    const [Destination, setDestination] = useState(location.state.Destination || "");
    const [date, setDate] = useState(location.state.date || [{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);
    const [option, setOption] = useState(location.state.option || {});
    const[opendate,setopendate]=useState(false);
    return (
        <div>
            <Navbar />
            <Head type="List" />
            <div className="Listcontainer">
                <div className="ListWrapper">
                    <div className="Listsearch">
                        <h1 className="lstitle">Search</h1>
                        <div className="Lsitem">
                            <label>Destination</label>
                            <input 
                                type="text" 
                                value={Destination} 
                                onChange={(e) => setDestination(e.target.value)} 
                            />
                        </div>
                        <div className="Lsitem">
                            <label>Check-in Date</label>
                            <span onClick={()=>setopendate(!opendate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {opendate && (<DateRange 
                                onChange={(item) => setDate([item.selection])} 
                                minDate={new Date()}  
                                ranges={date} 
                            />)}
                        </div>
                        <div className="Lsitem">
                            <label>Options</label>
                            <div className="lsoption">
                            <div className="Isoptionitem">
                                <span className="Isoptiontext">Min price <small>per neight</small></span>
                                <input type="number" className="Isoptioninput"></input>
                            </div>
                            <div className="Isoptionitem">
                                <span className="Isoptiontext">Max price <small>per neight</small></span>
                                <input type="number" className="Isoptioninput"></input>
                            </div>
                            <div className="Isoptionitem">
                                <span className="Isoptiontext">People</span>
                                <input type="number" className="Isoptioninput" placeholder={option.people} min={1}></input>
                            </div>
                           
                            <div className="Isoptionitem">
                                <span className="Isoptiontext">Room</span>
                                <input type="number" className="Isoptioninput" placeholder={option.room} min={0}></input>
                            </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    
                    <div className="listresult">
                      <SearchItem/>
                      <SearchItem/>
                      <SearchItem/>
                      <SearchItem/>
                      <SearchItem/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
