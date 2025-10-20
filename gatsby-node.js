/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Suppress gatsby-plugin-react-helmet warning
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    ignoreWarnings: [
      {
        module: /gatsby-plugin-react-helmet/,
      },
    ],
  });
};
