module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsbyblogmain69219.gatsbyjs.io",
    title: "Gatsby Blog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
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
