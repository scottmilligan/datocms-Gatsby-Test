import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import Card from '../components/Card';

const IndexPage = ({ data }) => (
  <Layout>
    <Banner />
    <div className="home-news container">
      <h2 className="home-news__heading">Latest News</h2>
      <ul className="articles">
        {data.allDatoCmsNewsArticle.edges.map((article) => (
          <Card
            key={article.node.slug}
            image={article.node.image}
            heading={article.node.heading}
            copy={article.node.excerpt}
            slug={article.node.slug}
            createdAt={article.node.meta.createdAt}
          />
        ))}
      </ul>
    </div>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query pageQuery {
    allDatoCmsNewsArticle {
      edges {
        node {
          heading
          slug
          meta {
            createdAt
          }
          image {
            alt
            url
          }
        }
      }
    }
  }
`;
