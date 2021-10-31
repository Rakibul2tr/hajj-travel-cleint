import React from 'react';
import image from '../../media/logo/hajj.jpg';


const AvoutHajj = () => {
    return (
        <div className="container p-5">
            <div className="row">
                <h2 className="py-5 text-capitalize">About Hajj Sayd in Quran Hadith</h2>
                <div className="col-md-6">
                    <div className="content text-start">
                        <h5>* Main Hajj</h5>
                        <p>The word Hajj means, literally, repairing to a place for the sake of visit (al-qasd li-ziyarah), and in the terminology of the Islamic Shari'ah, it implies the repairing to Bait-Allah (the house of Allah) to observe the necessary devotion (iqamat-an-li-nusuk) Bait-Allah is one of the names by which the Ka'ba is called.</p>
                        <h5>* Umrah Hajj</h5>
                        <p>Ibn 'Umar reported that the Messenger of Allah (may peace be upon him) forbade the Muhrim to put on a cloth dyed in saffron or wars and he further said: One who does not find shoes (to wear) he way wear stockings, but (only) after trimming them below the ankles.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="aboutimg">
                                <img  className="img-fluid" src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvoutHajj;