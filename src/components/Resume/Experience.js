import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Positions = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="positions" />
    <div className="title">
      <h3>Positions</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Positions.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Positions.defaultProps = {
  data: [],
};

export default Positions;
