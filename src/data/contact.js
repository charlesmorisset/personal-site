import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGitlab } from '@fortawesome/free-brands-svg-icons/faGitlab';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/charlesmorisset',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://gitlab.com/morisset',
    label: 'GitLab',
    icon: faGitlab,
  },
  {
    link: 'https://www.linkedin.com/in/charles-morisset/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/morisset',
    label: 'Twitter',
    icon: faTwitter,
  },
];

export default data;
