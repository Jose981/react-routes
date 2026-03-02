import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { studies, experiences } from './data/resume';

function Resume() {

    return (
        <>
        <h1>Aqui aparece mi resumen Academico</h1>
        <h2>Estudios</h2>
        <ul>
        {studies.map(study => (
            <li key={study.id}>
                {study.title} - {study.institution}
            </li>
        ))}
        </ul>
        <h2>Experiencia</h2>
        {experiences.map(experience => (
            <li key={experience.id}>
                {experience.title} - {experience.date} - {experience.company}
            </li>
        ))}
        <Link to={'/'}>Volver al Home</Link>
        </>
    )
}

export default Resume; 