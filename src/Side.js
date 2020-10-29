import React from 'react';

const Side = () => (
  <>
    <ul className="list-group">
      {[
        'Section 01',
        'Section 02',
        'Section 03',
        'Section 04',
        'Section 05',
        'Section 06',
        'Section 07',
        'Section 08',
        'Section 09',
        'Section 10',
        'Section 11',
        'Section 12',
        'Section 13',
        'Section 14',
        'Section 15',
      ].map((section, index) =>
        <li key={index} className="list-group-item list-group-item-secondary">{section}</li>)}
    </ul>
  </>
);

export default Side;