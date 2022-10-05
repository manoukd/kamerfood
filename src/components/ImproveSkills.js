import React from 'react';

const ImproveSkills = () => {
    const list=[
        "Learn new recipes",
        "Experiment with food",
        "write your own recepies",
        "know nutrition facts",
        "Get cooking Tips",
        "Get ranked",
    ]
    return (
        <div className='section improve-skills'>
            <div className='col img'>
               <img src="/images/gallery/img10.jpg" alt="ne s'affiche pas"/>      
            </div>
            <div className='col typography'>
                <h1 className='title'>Improve Your Culinary Skills</h1>
                {
                    list.map((item,index)=>(
                        <p className='skill-item' key={index}>
                            {item}
                        </p>
                    ))
                }
                <button className='btn'>Signup now</button>
            </div>
            
        </div>
    );
};

export default ImproveSkills;