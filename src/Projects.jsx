import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projects from './data/projects';

function Projects() {
    return (
        <>
        <h1>Aqui aparece mi resumen de proyectos</h1>
        <h2>Proyectos:</h2>
        {projects.map(project => (
            <li key={project.id}>
                {project.name}
                {project.description}
                {project.url}
                {project.image}
            </li>
        ))}
        <Link to={'/'}>Volver al Home</Link>
        </>
    )
}

export default Projects;