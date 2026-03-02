import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <>
        <h1>Página principal del portfolio</h1>
        <h2>Me presento, mi nombre es Jose y aqui pueden ver mis proyectos y mi carrera académica.</h2>
        <Link to={'/resume'}>Acceder a mi carrera</Link>
        <br></br>
        <Link to={'/projects'}>Acceder a mis proyectos</Link>
        </>
    );
}

export default Home;