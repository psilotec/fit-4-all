import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Headroom from 'react-headroom';

import logo from '../images/ffaLogo.png';
import './index.scss';

const Header = () =>
  <div>
    <Headroom>
      <div className="header">
        <img src={logo} className="header-logo" alt="FF4A Logo" />
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
    <div className="footer">
      <div className="row">Footer Content</div>
    </div>
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
