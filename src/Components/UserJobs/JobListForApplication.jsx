import React from 'react';
import CardUserAllJobs from './CardUserAllJobs';

function JobListForApplication() {
  return (
    <div>
      <CardUserAllJobs jobPath={`/userjobdetails/:id`} />
    </div>
  );
}

export default JobListForApplication;
