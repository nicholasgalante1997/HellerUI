import React from 'react';
import '../../index.css';
import '../../themes/dark.css';
import '../../themes/pinched.css';
import '../../themes/font.css';

const spanStyle = { marginLeft: '8px', fontSize: '8px', color: 'rgba(270,270,270,0.6)' };

const Page = () => (
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

export default Page;
