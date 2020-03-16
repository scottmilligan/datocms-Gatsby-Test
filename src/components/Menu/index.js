import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

export const menuQuery = graphql`
{
  datoCmsMenu(name: {eq: "Main Nav"}) {
    pages {
      label
      slug
      childPages {
        label
        slug
      }
    }
  }
  }
`;

const Menu = () => (
  <nav className="main-nav">
    <ul className="main-nav__menu">
      <li className="main-nav__item"><a className="main-nav__link" href="/">Home</a></li>
      <StaticQuery
        query={menuQuery}
        render={((data) => (
          data.datoCmsMenu.pages.map((page) => (
            <li className="main-nav__item" key={page.slug}>
              <Link className="main-nav__link" activeClassName="main-nav__link--active" to={`/${page.slug}`}>{page.label}</Link>
              {page.childPages
                && (
                <nav className="sub-nav">
                  <ul className="sub-nav__list">
                    {page.childPages.map((childPage) => (
                      <li className="sub-nav__item" key={childPage.slug}>
                        <Link className="sub-nav__link" to={`/${childPage.slug}`}>{childPage.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                )}
            </li>
          ))
        ))}
      />
    </ul>
  </nav>
);

export default Menu;
