module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby Blog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `i7l90rgurond`,
        accessToken: `Gb5EriBe5KPqE-7BEmWYQxACYAyk0fwvNi8vEHCqBJc`,
        host: `preview.contentful.com`,
      },
    },
  ],
};
