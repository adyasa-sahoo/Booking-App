import "./Featured.css";
import Balasore from './images/Balasore.jpg';
import Bhadrak from './images/BHADRAK.jpg';
import Sambalpur from './images/Sambalpur.jpg';

const Featured = () => {
    return (
        <div className="featured">
            <div className="featureditem">
                <img src={Sambalpur} className="featuredimage" alt="Sambalpur" />
                <div className="featuredtitles">
                    <h1>Sambalpur</h1>
                    <h2>120 properties</h2>
                </div>
            </div>
            <div className="featureditem">
                <img src={Bhadrak} alt="Bhadrak" className="featuredimage" />
                <div className="featuredtitles">
                    <h1>Bhadrak</h1>
                    <h2>120 properties</h2>
                </div>
            </div>
            <div className="featureditem">
                <img src={Balasore} className="featuredimage" alt="Balasore" />
                <div className="featuredtitles">
                    <h1>Balasore</h1>
                    <h2>120 properties</h2>
                </div>
            </div>
           
        </div>
    );
};

export default Featured;
