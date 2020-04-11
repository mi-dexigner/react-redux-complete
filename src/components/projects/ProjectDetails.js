import React from 'react'

const ProjectDetails = (propos) => {
    const id = propos.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sunt quidem non ratione repellat quibusdam molestias amet quas nemo reiciendis ipsa enim illo voluptates magnam excepturi adipisci, assumenda, voluptate possimus.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails

