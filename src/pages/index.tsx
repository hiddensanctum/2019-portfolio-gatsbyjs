import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/about';
import Contact from '../components/contact';
import Experience from '../components/experience';
import Landing from '../components/landing';
import Projects from '../components/projects';
import '../styles/layout.scss';

const Index:FunctionComponent = () => {

  return (
    <Layout>
      <SEO title='Welcome' />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
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
