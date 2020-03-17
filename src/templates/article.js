/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import Layout from '../components/layout';

const Article = (props) => {
  const article = props.data.datoCmsNewsArticle;

  return (
    <Layout>
      <div className="container main-content">
        <h1>{article.heading}</h1>
        <h2>{article.intro}</h2>
        <p className="article__date">{moment(article.meta.createdAt).format('MMMM Do, YYYY')}</p>
        <div dangerouslySetInnerHTML={{ __html: article.body }} />
      </div>
    </Layout>
  );
};

export default Article;

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    datoCmsNewsArticle(slug: { eq: $slug }) {
      slug
      heading
      intro
      body
      meta {
        createdAt
      }
    }
  }
`;
