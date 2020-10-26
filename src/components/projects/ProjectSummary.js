import React from 'react'

const ProjectSummary = ({project})=> {
    return (

        <div className="card z-depth-0 project-summary">
              <div className="card-content grey-text text-darken-3">
                  <span className="card-title">{project.title}</span>
                  <p>Posted by the net Ninja</p>
                  <div className="grey-text">3rd September, 2am</div>
              </div>
          </div>
    )
}

export default ProjectSummary ;