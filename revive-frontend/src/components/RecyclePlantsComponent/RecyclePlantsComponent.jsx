import React, { useEffect } from 'react';
import './RecyclePlantsComponent.css'
import { useNavigate ,Link} from 'react-router-dom';

const RecyclePlantsComponent = () => {
    useEffect(() => {
        document.title = "Revive";
    }, []);

    const navigate= useNavigate();

    return (
        <div className="whole-container recycle-plants-landing">

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
                        <div className="line-one"><img className="differentiate-e" src="src/assets/images/revive-favicon.jpg" alt="Revive Logo" />cycle Riches: Your Discards,<br/>
                        that's our Niches
                        </div>
                    </h1>
                   
                    <h3 className="theory">
                        Sell your E-waste and be a catalyst for a sustainable future
                    </h3>
                    <div className="row">
                    <Link to="http://localhost:5173/auction-website/admin" className='btn-primary'>Join auction!</Link>
                    
                    <Link to="/sign-up/recycle-plants" className='btn-secondary'>Sign Up!</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};



export default RecyclePlantsComponent;
