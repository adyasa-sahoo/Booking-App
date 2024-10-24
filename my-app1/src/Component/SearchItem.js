import hotelimg from "./images/hotelimg.jpg";
import './searchitem.css';

const SearchItem=()=>{
return(
<div className="Searchitem">
    <img 
    src={hotelimg}
    alt=""
    className="lsimg"/>
    <div className="lsdesc">
        <h1 className="lstitle">Apartment</h1>
        <span className="sidistance">500m from center</span>
        <span className="sioptaxi">Free Airport Taxi</span>
        <span className="issubtitle">
            Studio Apartment with airconditioning
        </span>
        <span className="isfeature">
            Entire Studio *1 bathroom 
        </span>
        <span className="iscancle">Free Cancellation</span>
        <span className="iscancleop">You can cancel later ,So lock in this great price today!</span>
    </div>
    <div className="lsdetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="isdetailtax">
            <span className="isprice">$123</span>
            <span className="sitaxop">Include taxes and fees</span>
        </div>
    </div>
</div>
);
};
export default SearchItem;