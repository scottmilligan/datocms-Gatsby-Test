import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';

const Card = (props) => (
  <section className="card">
    {props.image && <img src={props.image.url} alt={props.image.alt} className="card__image" />}
    <div className="card__content">
      <p className="card__date">{moment(props.createdAt).format('MMMM Do, YYYY')}</p>
      <Link to={`/news/${props.slug}`} className="card__heading">{props.heading}</Link>
      <p>{props.copy}</p>
    </div>
  </section>
);

export default Card;
