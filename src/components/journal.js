import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby';
import "../styles/journal.scss"


const Journal = () => {
  return (
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
                }
              }
            }
          }
        }    
      `}
      render={data => {
        const posts = data.allMarkdownRemark.edges;
        return (
          <div className="journal-viewport">
            <div className="journal-layout">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <article key={node.fields.slug}>
                    <header>
                      <h3>
                        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                          {title}
                        </Link>
                      </h3>
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
                )
              })}
            </div>
          </div>
        )
      }}
    />
  )
}

export default Journal
