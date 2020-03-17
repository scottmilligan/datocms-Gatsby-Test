import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const PrizesPage = ({ data }) => (
  <Layout>
    <main className="container main-content">
      <h1>{data.datoCmsPage.title}</h1>
      <h2 className="page-intro">{data.datoCmsPage.intro}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.datoCmsPage.body }} />
      <div className="prizes">
        <img className="prizes__featured-prize" src={data.datoCmsAsset.url} />
        {data.allDatoCmsPrize.edges.map((prize) => (
          <section className="prize" key={prize.node.id}>
            <h2 className="prize__header">{prize.node.name}</h2>
            <span className={`prize__primary-prize prize__primary-prize--${prize.node.colour}`}>{prize.node.primaryPrize}</span>
            <p className="prize__description">{prize.node.prizePlanText}</p>
          </section>
        ))}
      </div>
    </main>
  </Layout>
);

export default PrizesPage;

export const pageQuery = graphql`
  query prizesQuery {
    datoCmsPage(slug: {eq: "prizes"}) {
      id
      body
      title
      intro
    }
    allDatoCmsPrize(sort: {fields: name, order: DESC}) {
      edges {
        node {
          colour
          name
          primaryPrize
          prizePlanText
          prizeType
          secondaryPrize
          id
        }
      }
    }
    datoCmsAsset(basename: {eq: "prizes-banner"}) {
      id
      url
    }
  }
`;
