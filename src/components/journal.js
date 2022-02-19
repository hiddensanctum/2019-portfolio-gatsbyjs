import React from 'react';
import Image from 'gatsby-image';
import { StaticQuery, graphql, Link } from 'gatsby';
import '../styles/journal.scss';


const Journal = () => (
  <StaticQuery
    query={graphql`
      query PostsQuery{
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
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
    `}
    render={(data) => {
      const posts = data.allMarkdownRemark.edges;

      return (
        <div className='journal-viewport' name='journal'>
          <div className='journal-layout'>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <article key={node.fields.slug}>
                  <header>
                    <Image
                      fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                      className='featured-blog-image'
                    />
                    <h2>
                      <Link to={node.fields.slug}>
                        {title}
                      </Link>
                    </h2>
                    <small>{node.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
                </article>
              );
            })}
          </div>
        </div>
      );
    }}
  />
);

export default Journal;
