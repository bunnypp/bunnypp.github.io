import './App.css';
import { Divider, Flex } from '@chakra-ui/react'
import Layout from './layout/Layout'
import About from './views/About'
import Experience from './views/Experience';
import Skills from './views/Skills';
import Projects from './views/Projects';
import { MutableRefObject, useRef } from 'react';
import Gallery from './views/Gallery';



function App() {
    const aboutRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
    const experienceRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
    const projectsRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
    const skillsRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
    const galleryRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

    let allRefs = [aboutRef, experienceRef, projectsRef, skillsRef, galleryRef];

    return (
        <Layout allRefs={allRefs}>
            
            <Experience ref={experienceRef}/>
            <Divider borderColor={"#96837d"}/>
            <Skills ref={skillsRef}/>
            <Divider borderColor={"#96837d"}/>
            <Projects ref={projectsRef}/>
            <Divider borderColor={"#96837d"}/>
            <About ref={aboutRef}/>
            <Divider borderColor={"#96837d"}/>
            <Gallery ref={galleryRef}/>
        </Layout>
    );
}

export default App;
