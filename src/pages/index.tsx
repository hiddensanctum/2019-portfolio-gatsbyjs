import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import '../styles/layout.scss';

const Index:FunctionComponent = () => {

  return (
    <Layout>
      <SEO title='Hello' />
      <Landing/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
