import { Icon } from './Icon';

const Footer = () => {

    return (
      <footer className="footer">
      <a href="https://github.com/apersonius" target="_blank" rel="noreferrer">
      <Icon
        iconName="Github"
        size={25}
        className="icons"
      />
      </a>
      <a href="https://www.linkedin.com/in/abigail-personius-369759a2/" target="_blank" rel="noreferrer">
      <Icon
        iconName="Linkedin"
        size={25}
        className="icons"
      />
      </a>
      <a href="https://twitter.com/abigailpersoniu" target="_blank" rel="noreferrer">
      <Icon
        iconName="Twitter"
        size={25}
        className="icons"
      />
      </a>
      <p>click me</p>
      </footer>
    );
  }
   
  export default Footer;