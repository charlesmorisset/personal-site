import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/cm_2020.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Charles Morisset</h2>
        <p><a href="mailto:charles.morisset@ncl.ac.uk">charles.morisset@ncl.ac.uk</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I am Senior Lecturer in Security and Director of Postgraduate Studies
        in the <a href="https://www.ncl.ac.uk/computing/">School of Computing</a>
        , at <a href="https://www.ncl.ac.uk/">Newcastle University</a>.

      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Charles Morisset.</p>
    </section>
  </section>
);

export default SideBar;
