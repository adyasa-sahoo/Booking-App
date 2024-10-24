import "./Property.css";

import room1 from './images/room1.jpg';
import room2 from './images/room2.jpg';
import room3 from './images/room3.jpg';
import room4 from './images/room4.jpg';
import room5 from './images/room5.jpg';


const Proprty=()=>{
    return (
        <div className="pList">
            <div className="plistitem">
                <img src={room1} className="plistimage" alt="room1" />
                <div className="plisttitles">
                    <h1>Resort</h1>
                    <h2>120 properties</h2>
                </div>
            </div>
            <div className="plistitem">
                <img src={room2} className="plistimage" alt="room2" />
                <div className="plisttitles">
                    <h1>Hotels</h1>
                    <h2>120 properties</h2>
                </div>
            </div>
            <div className="plistitem">
                <img src={room3} className="plistimage" alt="room3" />
                <div className="plisttitles">
                    <h1>Apartment</h1>
                    <h2>120 properties</h2>
                </div>
            </div>
            <div className="plistitem">
                <img src={room4} className="plistimage" alt="room4" />
                <div className="plisttitles">
                    <h1>Villas</h1>
                    <h2>120 properties</h2>
                </div>
            </div>
            <div className="plistitem">
                <img src={room5} className="plistimage" alt="room5" />
                <div className="plisttitles">
                    <h1>Cabin</h1>
                    <h2>120 properties</h2>
                </div>
            </div>
           
        </div>
    )
}
export default Proprty;