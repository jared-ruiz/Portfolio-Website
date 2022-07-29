import React, { useState } from "react";
// import Modal from "../Modal";

const Photos = (props) => {
    const projects = props.projectsList;

    return(
        <div className="columns has-background-light mt-4">
            
            {projects.map((project) => (
                <div className="column mt-2">
                    <div className="card p-3">

                        <div className="card-image">
                            <figure class="image is-5by3">
                                <img src={project.image} alt="project-images" className="project-images"/>
                            </figure>
                        </div>

                        <div className="m-3">
                            <div>
                                <p className="title is-4">{project.title}</p>
                                <a className="button is-fullwidth is-dark is-outlined my-2" href={project.github} target='_blank'>GitHub</a>
                                <a className="button is-fullwidth is-dark is-outlined" href={project.deployLink} target='_blank'>Deployed</a>
                            </div>
                        </div>
                        
                        <div className="mx-2">
                            {project.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Photos;