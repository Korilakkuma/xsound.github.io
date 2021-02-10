import React from 'react';
import PropTypes from 'prop-types';

export const Overview = (props) => {
  const { title, returnTypes, applicableModules, description } = props;

  return (
    <section className="Overview">
      <div className="Overview__heading">
        <h1>{title}</h1>
        {Array.isArray(returnTypes) ? <p className="Overview__returns">Returns : <span>{returnTypes.join(' | ')}</span></p> : null}
        {Array.isArray(applicableModules) ? <p className="Overview__applicable">Returns : <span>{applicableModules.join(' | ')}</span></p> : null}
      </div>
      <hr role="presentation" />
      <p>{description}</p>
    </section>
  );
};

Overview.propTypes = {
  title            : PropTypes.string.required,
  returnTypes      : PropTypes.array,
  applicableModules: PropTypes.array,
  description      : PropTypes.string.required
};
