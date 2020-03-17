const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsPage {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsNewsArticle {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsWinnerArticle {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsPage.edges.map(({ node: page }) => {
        createPage({
          path: `/${page.slug}`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: page.slug,
          },
        })
      });
      result.data.allDatoCmsNewsArticle.edges.map(({ node: article }) => {
        createPage({
          path: `/news/${article.slug}`,
          component: path.resolve(`./src/templates/article.js`),
          context: {
            slug: article.slug,
          },
        })
      });
      result.data.allDatoCmsWinnerArticle.edges.map(({ node: article }) => {
        createPage({
          path: `/winners/${article.slug}`,
          component: path.resolve(`./src/templates/winnerArticle.js`),
          context: {
            slug: article.slug,
          },
        })
      })
      resolve()
    })
  })
}
