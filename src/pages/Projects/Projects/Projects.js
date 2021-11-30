import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Projects.css';
import SingleProject from './SingleProject/SingleProject';
const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("./fakeDB.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);


    return (
        <div className="color1">
            <Container>
                <h1 className="highlight pt-5 mb-3">My Projects</h1>
                <p className="text">CLICK || HOVER</p>

                <Row xs={1} md={2} lg={3} className="g-4 py-5 px-3 align-items-center">

                    {
                        projects.map(project => <SingleProject key={project.id} project={project} />)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Projects;