import "./Featured.css";
import Balasore from './images/Balasore.jpg';
import Bhadrak from './images/BHADRAK.jpg';
import Cuttack from './images/Cuttack.jpg';
import Dhenkanal from './images/Dhenkanal.jpg';
import Jagatsinghpur from './images/jagatsinghpur.jpg';
import Khordha from './images/Khurdha.jpg';
import Koraput from './images/koraput.png';
import Nayagarh from './images/Nayagarh.jpg';
import Puri from './images/Puri.jpg';
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
            <div className="featureditem">
                <img src={Cuttack} className="featuredimage" alt="Cuttack" />
                <div className="featuredtitles">
                    <h1>Cuttack</h1>
                    <h2>120 properties</h2>
                </div>
            </div>
            <div className="featureditem">
                <img src={Dhenkanal} className="featuredimage" alt="Dhenkanal" />
                <div className="featuredtitles">
                    <h1>Dhenkanal</h1>
                    <h2>120 properties</h2>
                </div>
            </div>
            <div className="featureditem">
                <img src={Jagatsinghpur} className="featuredimage" alt="Jagatsinghpur" />
                <div className="featuredtitles">
                    <h1>Jagatsinghpur</h1>
                    <h2>120 properties</h2>
                </div>
            </div>
            <div className="featureditem">
                <img src={Khordha} className="featuredimage" alt="Khordha" />
                <div className="featuredtitles">
                    <h1>Khordha</h1>
                    <h2>120 properties</h2>
                </div>
            </div>
            <div className="featureditem">
                <img src={Koraput} className="featuredimage" alt="Koraput" />
                <div className="featuredtitles">
                    <h1>Koraput</h1>
                    <h2>120 properties</h2>
                </div>
            </div>
            <div className="featureditem">
                <img src={Puri} className="featuredimage" alt="Puri" />
                <div className="featuredtitles">
                    <h1>Puri</h1>
                    <h2>120 properties</h2>
                </div>
            </div>
            <div className="featureditem">
                <img src={Nayagarh} className="featuredimage" alt="Nayagarh" />
                <div className="featuredtitles">
                    <h1>Nayagarh</h1>
                    <h2>120 properties</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;
