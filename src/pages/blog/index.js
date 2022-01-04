import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <p>Here are my latest Blog posts:</p>
            {
                data.allContentfulBlog.edges.map(({node}) => {
                    return (
                        <article key={node.id}>
                            <h2> {node.title} </h2>
                            {/* <h2> 
                                <Link to={node.slug}>
                                    {node.title}
                                </Link>
                            </h2> */}
                            <p>Posted on: {node.date}</p>
                        </article>
                    )
                }
            )
            }
        </Layout>
    )
}

export const query = graphql`
query {
    allContentfulBlog {
      edges {
        node {
          id
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

export default BlogPage