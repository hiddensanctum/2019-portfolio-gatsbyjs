import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/about';
import Contact from '../components/contact';
import Experience from '../components/experience';
import Landing from '../components/landing';
import Projects from '../components/projects';
import '../styles/layout.scss';

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='Welcome' />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.objectOf({
    site: PropTypes.objectOf({
      siteMetadata: PropTypes.objectOf({
        title: PropTypes.string,
      }),
    }),
  }),
  location: PropTypes.string,
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
