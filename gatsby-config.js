module.exports = {
  siteMetadata: {
    title: 'Nick Weds Pirave',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['rouge script', 'libre baskerville', 'montserrat'],
      },
    },
    'gatsby-plugin-less',
  ],
}
