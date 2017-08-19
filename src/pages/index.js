import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () =>
  <div className="main-content">
    <div className="hero">
      <p>Hero</p>
    </div>

    <div className="white-section" />

    <div className="accent-section">
      <div className="card-light">
        Check this out
        <button className="success-button">Click here</button>
      </div>
      <div className="card-light">Something else</div>
    </div>

    <div className="white-section" />
    <div className="accent-section" />
    <div className="white-section" />
  </div>;

// <div>
//   <h1>Hi people</h1>
//   <p>Welcome to your new Gatsby site.</p>
//   <p>Now go build something great.</p>
//   <Link to="/page-2/">Go to page 2</Link>
// </div>;

export default IndexPage;
