import React from 'react';
import { Meta } from '@storybook/react';

import '../../index.css';
import '../../themes/dark.css';
import '../../themes/pinched.css';
import '../../themes/font.css';

export default {
  title: 'themed-css/dark page',
  decorators: [(Story) => (
    <html lang="en">
      <body>
        <div style={{ minHeight: '20vh' }}>
          <Story />
        </div>
      </body>
    </html>
  )],
} as Meta;

const spanStyle = { marginLeft: '8px', fontSize: '8px', color: 'rgba(270,270,270,0.6)' };

export const DarkPage = () => (
  <section>
    <h1 className="heading">heller ui dark themed css</h1>
    <p className="paragraph">
      who needs react?
      <span className="paragraph" style={spanStyle}>
        (we all do)
      </span>
    </p>
  </section>
);
