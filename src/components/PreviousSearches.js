import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PreviousSearches = () => {
    const searches=['Ndole','Taro', 'Nkui', 'Okok','Ikok','Mitoumba','Eru','Kondre','Pile','Macabo Rapé','Koki','Choux','Sauce Gombo']

    return (
    
            <div className='previous-searches section'>
                <h2>Previous Searches</h2>
                <div className='previous-searches-container'>
                    {
                        searches.map((search,index)=>(<div key={index} style={{animationDelay: index*.1 + 's'}} className='search-item' >
                            {search}
                        </div>))
                    }
                </div>
                <div className='search-box'>
                    <input type="search" name="" placeholder='Search ...' value=""/>
                    <button type="" className='btn'>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>  
                </div>
            </div>

        
    );
};

export default PreviousSearches;