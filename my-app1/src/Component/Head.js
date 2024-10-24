import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faTrain, faCar, faBus, faCalendar, faPerson } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {format} from 'date-fns';
import { useNavigate} from 'react-router-dom';



const Head = () => {
    const [date, setdate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const[Destination,setDestination]=useState("");
      const[opendate,setopendate]=useState(false);
      const[openoption,setopenoption]=useState(false);
      const[option,setoption]=useState({
        people:1,
        room:1,
      });
      const navigate = useNavigate();

      const handleOption=(name,operation)=>{
        setoption(prev=>{
            return {
            ...prev,[name]:operation ==="i"? option[name]+1 :option[name]-1,
        }})
      }
      const handleSearch = () => {
        navigate("/hotel", { state: { Destination, date, option } });
    };


      
    return (
        <div className='header'>
            <div className="headerContainer">
                <div className='headerList'>
                    <div className='headerItems active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stay</span>
                    </div>
                    <div className='headerItems'>
                        <FontAwesomeIcon icon={faBus} />
                        <span>Bus</span>
                    </div>
                    <div className='headerItems'>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className='headerItems'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className='headerItems'>
                        <FontAwesomeIcon icon={faTrain} />
                        <span>Train</span>
                    </div>
                </div>
                <h1 className="headerTitle">Discover and Reserve Your Perfect Stay</h1>
                <p className='headerDesc'>From cozy cottages to luxurious resorts, find accommodations that suit your style and budget</p>
                <button className='headerButton'>Sign in /Register</button>
                <div className='searchbar'> 
                     <div className='Headersearchitem'>
                    <FontAwesomeIcon icon={faBed} className='searchicon'/>
                    <input type="text" 
                    placeholder='where are you going?'
                    className='headersearchinput'
                    onChange={(e)=>setDestination(e.target.value)}/>
                </div>
                <div className='Headersearchitem' onClick={()=>setopendate(!opendate)}>
                    <FontAwesomeIcon icon={faCalendar} className='searchicon'/>
                    <span>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                    {opendate && <DateRange
                     editableDateInputs={true}
                     onChange={item => setdate([item.selection])}
                     moveRangeOnFirstSelection={false}
                     ranges={date}
                     className='date'
                     minDate={new Date()}/>}
                </div>
                <div className='Headersearchitem' >
                    <FontAwesomeIcon icon={faPerson} className='searchicon'/>
                   <span>{`${option.people} people . ${option.room} room`}</span>
                   <div className='option' onClick={()=>setopenoption(!openoption)}>
                    {openoption && <div className='optionitem'>
                        <span className='optiontext'>people</span>
                        <div className='optioncounter'>
                        <button  className='optioncounterbtn'disabled={option.people<=1} onClick={()=>handleOption("people","d")}>-</button>
                        <span className='optioncounterno'>{option.people}</span>
                        <button className='optioncounterbtn' onClick={()=>handleOption("people","i")}>+</button>
                        </div>
                    </div>}
                    {openoption && <div className='optionitem'>
                        <span className='optiontext'>room</span>
                        <div className='optioncounter'>
                        <button className='optioncounterbtn' disabled={option.room<=1} onClick={()=>handleOption("room","d")}>-</button>
                        <span className='optioncounterno'>{option.room}</span>
                        <button className='optioncounterbtn' onClick={()=>handleOption("room","i")}>+</button>
                        </div>
                    </div>}
                   </div>
                </div>
                <div className='Headersearchitem'>
                    <button className='headerbutton' onClick={handleSearch}>Search</button>

                </div>
                </div>
              
              
            </div>
        </div>
    );
}
export default Head;
