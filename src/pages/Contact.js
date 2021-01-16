import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Charles Morisset"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Please do not hesitate to get in touch, however, since I tend to receive quite a few
          emails, multiple routes might be available:
          <ul>
            <li>If you are a student enrolled in one of my modules, please check the
              instructions provided in your Canvas module.
            </li>
            <li>If you are a student in the School of Computing and you are facing any issue, please
              get in touch with Computing.Teaching@ncl.ac.uk.
            </li>
            <li>If you are a colleague at Newcastle University, please drop me a message directly
              on Teams.
            </li>
            <li>If you are interested in doing a PhD project with me, please email me
              your research proposal, identifying how it aligns with my own research.
            </li>
            <li>If you want to chat about research in general, please ping me on <a href="https://twitter.com/CharlesMorisset">Twitter</a>!</li>
          </ul>
        </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
