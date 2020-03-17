import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import moment from 'moment';
import useScript from '../hooks/useScript';
import Layout from '../components/layout';

const WinnersPage = ({ data }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
  });
  useScript('https://www.postcodelottery.co.uk/react-apps/weekend-winners/js/weekend-winners.3f430c2ef09b19938506.min.js');

  return (
    <Layout>
      <main className={`container ${data.datoCmsPage.sidebar ? 'main-content main-content--sidebar' : 'main-content'}`}>
        <article className="body-content">
          <h1>{data.datoCmsPage.title}</h1>
          <h2 className="page-intro">{data.datoCmsPage.intro}</h2>
          <div className="recent-winners">
            {data.allDatoCmsWinnerArticle.edges.map((winner) => (
              <div className="winner">
                <img className="winner__image" src={winner.node.image.url} alt={winner.node.image.title} />
                <div className="winner__content">
                  <h3 className="winner__prize">{winner.node.type} Prize</h3>
                  <span className="winner__date">{moment(winner.node.createdAt).format('dddd Do MMMM YYYY')}</span>
                  <Link to={`/winners/${winner.node.slug}`} className={`winner__button winner__button--${winner.node.colour}`}>
                    <span className="winner__postcode">{winner.node.postcode}</span>
                    <span className="winner__town">in {winner.node.town}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {data.datoCmsPage.body
            && (
              <div dangerouslySetInnerHTML={{ __html: data.datoCmsPage.body }} />
          )}
          <div id="weekend-winners" className="panel winners-search-app" />
        </article>
      </main>
    </Layout>
  );
};

export default WinnersPage;

export const pageQuery = graphql`
  query winnersQuery {
    datoCmsPage(slug: {eq: "winners"}) {
      id
      body
      title
      intro
    }
    allDatoCmsWinnerArticle {
      edges {
        node {
          slug
          title
          colour
          meta {
            createdAt
          }
          postcode
          town
          prizeType
          image {
            url
            title
          }
        }
      }
    }
  }
`;
