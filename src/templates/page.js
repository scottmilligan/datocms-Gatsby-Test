import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Page = (props) => {
  const page = props.data.datoCmsPage;

  return (
    <Layout>
      <main className="container main-content">
        <h1>{page.title}</h1>
        {page.intro && <h2 className="page-intro">{page.intro}</h2>}
        {page.body && (
        <div className="body-content">
          {page.video
            && (
            <iframe
              title={page.video.name}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${page.video.identifier}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video"
            />
            )}
            <div dangerouslySetInnerHTML={{ __html: page.body }} />
        </div>
        )}
      </main>
    </Layout>
  );
};

export default Page;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    datoCmsPage(slug: { eq: $slug }) {
      body
      slug
      title
      intro
    }
  }
`;
