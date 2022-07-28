import React, {useState} from 'react';
import Photos from '../Photos';

//project images
import img1 from '../../assets/project-images/project-1.PNG'
import img2 from '../../assets/project-images/project-2.PNG'
import img3 from '../../assets/project-images/project-3.PNG'

const Portfolio = () => {

    //project information
    const [projectList, setProjectList] = useState([
        {
            // id: 1,
            title: 'Patio',
            image: img1,
            description: "Local bar locator using geographic location API's and brewery API's to locate top 5 destinations near you.",
            github: 'https://github.com/kyrotomato/Patio',
            deployLink: 'https://kyrotomato.github.io/Patio/'
        },
        {
            // id: 2,
            title: 'Fantasy Chat',
            image: img2,
            description: "Online role playing application with ability to store posts and comments for every campaign's needs.",
            github: 'https://github.com/jared-ruiz/Fantasy-Chat',
            deployLink: 'https://vast-refuge-25222.herokuapp.com/login'
        },
        {
            // id: 3,
            title: 'Current',
            image: img3,
            description: "An all in one link sharing application to document and show off the most important links in your life.",
            github: 'https://github.com/JonCurls/current',
            deployLink: 'https://desolate-crag-78193.herokuapp.com/'
        }
    ])

    return(
        <div>
            <h1 className='has-text-centered mt-5 title'>Recent Projects</h1>
            <Photos projectsList={projectList} />
        </div>
        
    )
}

export default Portfolio;