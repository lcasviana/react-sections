import React from 'react';

const Nav = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ma3">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigationBar"
        aria-controls="navigationBar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navigationBar">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {['Section 1', 'Section 2', 'Section 3', 'Section 4']
            .map((section, index) => (
              <li key={index} className="nav-item white pa2">
                {section}
              </li>
            ))}
        </ul>
      </div>
    </nav>
  </>
);

export default Nav;