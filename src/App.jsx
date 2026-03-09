import React from 'react';
import { personal, skillGroups, experiences, projects, education, certifications, activities } from './data';

import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Divider from './components/Divider';

export default function App() {
  return (
    <>
      <Nav name={personal.name} />
      <Hero personal={personal} />
      <Divider />
      <About personal={personal} />
      <Divider />
      <Skills skillGroups={skillGroups} />
      <Divider />
      <Experience experiences={experiences} />
      <Divider />
      <Projects projects={projects} />
      <Divider />
      <Education education={education} />
      <Divider />
      <Certifications certifications={certifications} />
      <Divider />
      <Activities activities={activities} />
      <Divider />
      <Contact personal={personal} />
      <Footer personal={personal} />
    </>
  );
}
