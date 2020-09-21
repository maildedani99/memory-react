import React from 'react';
import './card.module.css';


const Card = () => {



    return (
        <div className="carta_box">
            <div className="carta">
                <div className="cara">
                    <img src="http://wiki.vykar.com/skins/common/images/2000px-Playing_card_spade_A_svg.png" width="200" height="250px" />
                </div>
                    <div className="cara.detras">
                        <img src="http://chetart.com/blog/wp-content/uploads/2012/05/playing-card-back.jpg" width="200" height="250px" />
                </div>
            </div>
        </div>
    )
}
export default Card;
