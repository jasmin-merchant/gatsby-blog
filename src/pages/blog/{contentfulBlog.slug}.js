import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from '../../components/layout'

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}

const BlogPost = ({ data }) => {
  const bodyRichText = data.contentfulBlog.body
  const image = getImage(data.contentfulBlog.heroImage)
  return (
    <Layout pageTitle={data.contentfulBlog.title}>
      <p>Posted on: {data.contentfulBlog.date}</p>
      <GatsbyImage 
        image={image}
        alt={data.contentfulBlog.heroImageAlt}
      />
      <p>
        Photo Credit:{" "}
        <a href={data.contentfulBlog.heroImageCreditLink} target="_blank" rel="noreferrer">
          {data.contentfulBlog.heroImageCreditText}
        </a>
      </p>
      <div>{bodyRichText && renderRichText(bodyRichText, options)}</div>
    </Layout>
  )
}

export const query = graphql
`
query($id: String) {
  contentfulBlog(id: {eq: $id}) {
      id
      body {
        raw
      }
      heroImageAlt
      heroImageCreditLink
      heroImageCreditText
      title
      heroImage {
        gatsbyImageData
      }
      date(formatString: "MMMM DD, YYYY")
      slug
  }
}

`

export default BlogPost