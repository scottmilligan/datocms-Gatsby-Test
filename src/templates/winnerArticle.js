/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import Layout from '../components/layout';

const WinnerArticle = (props) => {
  const article = props.data.datoCmsWinnerArticle;

  return (
    <Layout>
      <div className="container main-content">
        <h1>{article.title}</h1>
        <h2 className="page-intro">{moment(article.createdAt).format('D MMMM  YYYY')} - {article.postcode} - {article.town} - {article.type}</h2>
        <div className="body-content">
          {article.video
            && (
            <iframe
              title={article.video.name}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${article.video.identifier}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video"
            />
            )}
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
      </div>
    </Layout>
  );
};

export default WinnerArticle;

export const pageQuery = graphql`
  query WinnerArticleBySlug($slug: String!) {
    datoCmsWinnerArticle(slug: { eq: $slug }) {
      body
        slug
        title
        meta {
          createdAt
        }
        postcode
        town
        prizeType
    }
  }
`;
