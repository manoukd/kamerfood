import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
const QuoteSection = () => {
    return (
        <div className='section quote'>
            <p className='quote-text'>
                <FontAwesomeIcon icon={faQuoteLeft}/>
                No matter what you face in live, eat first.
            </p>
            
            <p className='quote-auther'>- Manou_KD</p>
        </div>
    );
};

export default QuoteSection;