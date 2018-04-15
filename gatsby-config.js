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
        fonts: ['cinzel', 'merriweather', 'montserrat', 'great vibes'],
      },
    },
    'gatsby-plugin-less',
  ],
}
