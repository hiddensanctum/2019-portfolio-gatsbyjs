import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/blogpost.scss';


const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.allMdx.edges[0].node;
  const siteTitle = data.site.siteMetadata.title;
  const featuredImageSrc = post.frontmatter.featuredImage.childImageSharp.fluid.src;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Helmet title={post.frontmatter.title}>
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:image'
          content={`${data.site.siteMetadata.siteUrl}${featuredImageSrc}`}
        />
      </Helmet>
      <article className='article-post'>
        <div className='article-header'>
          <h1>
            {post.frontmatter.title}
          </h1>
          <p>
            {post.frontmatter.date}
          </p>
        </div>
        <div className='article-section'>
          <Image
            fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
            className='featured-blog-image'
          />
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <MDXRenderer>
            {post.body}
          </MDXRenderer>
        </div>
      </article>

      <nav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel='prev'>
                <FontAwesomeIcon icon={faArrowCircleLeft} /> {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel='next'>
                {next.frontmatter.title} <FontAwesomeIcon icon={faArrowCircleRight} />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    allMdx(filter: {fields: {slug: {eq: $slug}}}) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          body
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 630, maxHeight: 480) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
