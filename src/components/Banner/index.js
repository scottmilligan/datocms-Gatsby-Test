import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export const bannerQuery = graphql`
{
  datoCmsBanner(title: {eq: "Home banner"}) {
    title
    image {
      url
    }
  }
  datoCmsAsset(basename: {eq: "50k"}) {
    url
  }
}
`;

const Banner = (props) => {
  const styles = {
    backgroundImage: `url(${props.background})`,
  };

  return (
    <div className="banner" style={styles}>
      <img src={props.svg.url} className="banner__svg" />
    </div>
  );
};

const BannerWrapper = () => (
  <StaticQuery
    query={bannerQuery}
    render={((data) => (
      <Banner background={data.datoCmsBanner.image.url} svg={data.datoCmsAsset} />
    ))}
  />
);

export default BannerWrapper;
