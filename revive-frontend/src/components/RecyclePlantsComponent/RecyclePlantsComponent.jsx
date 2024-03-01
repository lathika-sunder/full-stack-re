import React, { useEffect } from 'react';
import '../RecyclePlantsComponent/RecyclePlantsComponent.css'
import { useNavigate ,Link} from 'react-router-dom';

const RecyclePlantsComponent = () => {
    useEffect(() => {
        document.title = "Revive";
    }, []);

    const navigate= useNavigate();

    return (
        <div className="whole-container home-page">

            <section>
                <div className="image-container">
                    <img
                        src="src/assets/images/man-carrying-tv-image-2.jpg"
                        className="image-Ewaste"
                        alt="tv-ewaste-image.jpg"
                    />
                </div>
                <div className="content-container">
                    <h1>
                        <div className="line-one"><img className="differentiate-e" src="src/assets/images/Favicon -revive.png" alt="Revive Logo" />cycle Riches: Your Discards,</div>
                    </h1>
                    <h1>
                        <div className="line-two">that's our Niches</div>
                    </h1>
                    <h3 className="theory">
                        Sell your E-waste and be a catalyst for a sustainable future
                    </h3>
                    <Link to="http://localhost:5174/auction-website/admin" className='mui-btn'><h1>Join auction!</h1></Link>
                </div>
            </section>
        </div>
    );
};



export default RecyclePlantsComponent;
