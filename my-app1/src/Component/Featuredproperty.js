import "./Featuredproperty.css";
import guest1 from './images/guest1.jpg';
import guest2 from './images/guest2.jpg';
import guest3 from './images/guest3.jpg';
import guest4 from './images/guest4.jpg';

const FeaturedProperty = () => {
    return (
        <div className="fp">
            <div className="fitem">
                <img src={guest1} alt="guest1" />
                <div className="fname">Guest House1 </div>
                <div className="fcity">Bhubaneswar</div>
                <div className="fprice">₹3000/night</div>
                <div className="frating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fitem">
                <img src={guest2} alt="guest2" />
                <div className="fname">Guest House2 </div>
                <div className="fcity">Cuttack</div>
                <div className="fprice">₹2500/night</div>
                <div className="frating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fitem">
                <img src={guest3} alt="guest3" />
                <div className="fname">Guest House3 </div>
                <div className="fcity">Puri</div>
                <div className="fprice">₹2800/night</div>
                <div className="frating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fitem">
                <img src={guest4} alt="guest4" />
                <div className="fname">Guest House4 </div>
                <div className="fcity">Sambalpur</div>
                <div className="fprice">₹3200/night</div>
                <div className="frating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperty;
