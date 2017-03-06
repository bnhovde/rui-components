import React from 'react';
import { Page, ReactSpecimen, ColorPaletteSpecimen } from 'catalog';
import Container from '../src/Container/Container';

export default () => (
  <Page>
    <h2>My Buttons</h2>

    <p>Are so nice</p>

    <ul>
      <li>Yes</li>
      <li>or no?</li>
    </ul>

    <hr />

    <ReactSpecimen>
      {'<Container primary>Container</Container>'}
    </ReactSpecimen>

  </Page>
);
