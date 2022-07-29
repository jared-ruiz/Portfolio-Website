import { fontSize } from "@mui/system";
import React from "react";

const Resume = () => {
    return(
        <div className='section p-3 m-1'>
            <a className="button has-text-weight-bold" id="cv-button">Download CV</a>
            <div className='columns mt-1'>

                <div className='column'>
                    {/* start of projects */}
                    <h2 className='has-text-left title has-text-weight-bold mt-5'>Projects</h2>
                    <h3 className="has-text-left subtitle has-text-weight-bold pt-2 mb-3">Current</h3>
                    <ul>
                        <p className="subtitle mb-3">Link conglomerate application to showcase the most up to date and important links in your day to day life.</p>
                        <li>● Implemented Apollo GraphQL CRUD routes.</li>
                        <li>● Designed User and Card schemas (resolvers/typeDefs)</li>
                        <li>● <span className="has-text-weight-bold">JavaScript, Node, Express, Apollo GraphQL, Mongoose (ODM), MongoDB, JSX.</span></li> 
                    </ul>

                    <h3 className="has-text-left subtitle has-text-weight-bold mt-5 mb-3">Fantasy Chat</h3>
                    <ul>
                        <p className='subtitle mb-3'>Online RPG Application where users can host their own game session and play with friends.</p>
                        <li>● Developed User and Comment models using sequelize.</li>
                        <li>● Utilized SQL and Sequelize (ORM).</li>
                        <li>● Implemented Express.js for RESTful API and CRUD routes.</li> 
                        <li>● <span className="has-text-weight-bold">JavaScript, Node, MySQL, Sequelize (ORM), Express.js.</span></li> 
                    </ul>

                    <h3 className="has-text-left subtitle has-text-weight-bold mt-5 mb-3">Patio</h3>
                    <ul>
                        <p className='subtitle mb-3'>Bar locator application that populates with local weather and bar locations near the user.</p>
                        <li>● Integrated 3rd party API’s that returned local weather forecasts and bar locations using the user's zip code and geo location (longitude, latitude).</li>
                        <li>● Utilized local storage to store zip code inputs.</li>
                        <li>● <span className="has-text-weight-bold">JavaScript, Node, 3rd Party API’s, Front End Local Storage.</span></li> 
                    </ul>
                </div>

                <div className="column">
                    {/* start of summary*/}       
                    <h2 className='has-text-left title has-text-weight-bold mt-5'>Summary</h2>
                    <p>
                        Full Stack Web Developer with a background in Business Marketing. Proficient in problem solving and working
                        within a fast paced work environment. Thrives in team oriented projects with the aim for quality and efficiency.
                    </p>

                    {/* start of technical skills */}
                    <h2 className='has-text-left title has-text-weight-bold mt-5'>Technical Skills</h2>
                    <p>
                        JavaScript, CSS, HTML5, SQL, NoSQL, GitHub, MongoDB, Mongoose ODM, MySQL, Express, React, Node,
                        Handlebars, Bootstrap, Bulma, Apollo GraphQL, PWA’s
                    </p>

                <h2 className="has-text-left title has-text-weight-bold mt-5">Education</h2>
                    <h3 className="has-text-left subtitle has-text-weight-bold mt-5 mb-3">University of Texas at San Antonio: <span style={{fontWeight: 'normal', fontSize: '18px'}}>BBA Marketing.</span></h3>
                    <h3 className="has-text-left subtitle has-text-weight-bold mt-3 mb-3">University of Texas at San Antonio: <span style={{fontWeight: 'normal', fontSize: '18px'}}>Full Stack Web Development Certification.</span></h3>
                </div>
            </div>
        </div>
    )
}

export default Resume;