import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export const footerQuery = graphql`
{
  datoCmsFooter(title: {eq: "Site footer"}) {
    legalText
  }
}
`;

const Footer = ({ data }) => (
  <footer className="footer">
    <div className="footer__inner container">
      <div className="footer__legal-text">
        <div className="footer__legal-text"dangerouslySetInnerHTML={{ __html: data.legalText }} />
      </div>
    </div>
  </footer>
);

const FooterWrapper = () => (
  <StaticQuery
    query={footerQuery}
    render={((data) => (
      <Footer data={data.datoCmsFooter} />
    ))}
  />
);

export default FooterWrapper;
