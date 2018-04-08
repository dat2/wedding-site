module.exports = {
  siteMetadata: {
    title: 'Nick Weds Pirave',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['rouge script', 'libre baskerville', 'montserrat'],
      },
    },
  ],
}
