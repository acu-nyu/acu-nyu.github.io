import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Page not found</h2>
          <p>Not a valid URL</p>
        </div>
      </header>
    </section>
  </Layout>
);

export const Head = () => (
  <>
    <title>Page Not Found | ACU at NYU</title>
  </>
);

export default IndexPage;
