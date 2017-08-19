import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Footer from '../pages/footer';
import Headroom from 'react-headroom';

import './index.scss';

const Header = () =>
  <div>
    <Headroom>
      <div
        style={{
          background: '#8D8C8C',
          fontFamily: 'Work Sans,sans-serif',
          boxShadow: 'rgba(0, 0, 0, 0.25) 1px 1px',
          height: '75px',
          fontSize: '3em',
          color: 'white',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Frascati Fit 4 All
            </Link>
          </h1>
        </div>
      </div>
    </Headroom>
  </div>;

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Frascati Fit 4 All"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        padding: '0',
      }}
    >
      {children()}
    </div>
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
