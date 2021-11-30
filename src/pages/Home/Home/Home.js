import React from 'react';
import Projects from '../../Projects/Projects/Projects';
import About from '../About/About';
import Intro from '../Intro/Intro';

const Home = () => {
    return (
        <div>
            <Intro />
            <About />
            <Projects />
        </div>
    );
};

export default Home;