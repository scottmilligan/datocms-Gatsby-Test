import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/Header';
import '../styles/index.scss';

export const imageQuery = graphql`
  query ImageQuery {
    datoCmsAsset(basename: {eq: "ppl"}) {
      url
    }
  }
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby POC"
      meta={[
        { name: 'description', content: 'Gatsby Contentful proof of concept' },
      ]}
    />
    <StaticQuery
      query={imageQuery}
      render={((data) => <Header image={data.datoCmsAsset} />)}
    />
    {children}
  </div>
);

export default TemplateWrapper;
