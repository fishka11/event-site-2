import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Meta = ({ eventSiteMenu = [], path }) => {
  const meta = eventSiteMenu.find((item) => String(item.path) === path) || {};
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
    </Helmet>
  );
};

Meta.propTypes = {
  eventSiteMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  path: PropTypes.string.isRequired,
};

export default Meta;
