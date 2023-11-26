import React from 'react';

import classes from './Footer.module.scss';
import FooterSeparator from './FooterSeparator';
import FooterMobileBtns from './FooterMobileBtns';
import FooterMobileBtn from './FooterMobileBtn';
import FooterLinks from './FooterLinks';
import FooterLink from './FooterLink';

const Footer = function (props) {
  const scrollToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const mobileBtns = [
    {
      id: 'back-to-top',
      name: 'Back to Top',
      href: '#header',
      action: scrollToTop,
    },
    {
      id: 'mobile-site',
      name: 'Request mobile site',
      href: '#',
      action: () => {},
    },
  ];

  const footerLinksArr = [
    {
      id: 'privacy-notice',
      name: 'Privacy Notice',
      href: 'https://www.twitch.tv/p/legal/privacy-policy/',
      target: '_blank',
      rel: 'nofollow',
    },
    {
      id: 'terms',
      name: 'Terms',
      href: 'https://www.twitch.tv/p/legal/terms-of-service/',
      target: '_blank',
      rel: 'nofollow',
    },
    {
      id: 'content-policy',
      name: 'Content Policy',
      href: '/content-policy',
      target: '',
      rel: '',
    },
    {
      id: 'community-guidelines',
      name: 'Community Guidelines',
      href: 'https://www.twitch.tv/p/legal/community-guidelines/',
      target: '_blank',
      rel: 'nofollow',
    },
    {
      id: 'developer-terms',
      name: 'Developer Terms',
      href: 'https://www.twitch.tv/p/legal/developer-agreement/',
      target: '_blank',
      rel: 'nofollow',
    },
    {
      id: 'dmca-guidelines',
      name: 'DMCA guidelines',
      href: 'https://www.twitch.tv/p/en/legal/dmca-guidelines/',
      target: '_blank',
      rel: '',
    },
    {
      id: 'api',
      name: ' API ',
      href: '/api',
      target: '_self',
      rel: '',
    },
    {
      id: 'contribution-guidelines',
      name: 'Contribution Guidelines',
      href: 'https://github.com/twitchtv/igdb-contribution-guidelines/wiki',
      target: '_blank',
      rel: '',
    },
    {
      id: 'discord',
      name: 'Discord',
      href: 'https://discord.gg/WvBNFRu',
      target: '_blank',
      rel: '',
    },
    {
      id: 'twitter',
      name: 'Twitter',
      href: 'https://twitter.com/IGDBcom',
      target: '_blank',
      rel: '',
    },
    {
      id: 'user-voice',
      name: 'UserVoice',
      href: 'https://twitch.uservoice.com/forums/929953-igdb',
      target: '_blank',
      rel: '',
    },
  ];

  const classNames = `${classes.footer} ${props.className}`;

  return (
    <footer id="footer" className={classNames}>
      <div className={classes.footer__container}>
        <FooterMobileBtns>
          {mobileBtns.map((btn) => (
            <FooterMobileBtn
              key={btn.id}
              id={btn.id}
              name={btn.name}
              href={btn.href}
              action={btn.action}
            />
          ))}
        </FooterMobileBtns>
        <FooterSeparator />
        <FooterLinks>
          {footerLinksArr.map((link, index, links) => (
            <React.Fragment key={link.id}>
              <FooterLink
                name={link.name}
                href={link.href}
                target={link.target}
                rel={link.rel}
              />
              {index !== links.length - 1 && <span> - </span>}
            </React.Fragment>
          ))}
        </FooterLinks>
        <div className={classes.footer__made}>
          <span>IGDB is operated by </span>
          <FooterLink
            name="Twitch"
            href="https://www.twitch.tv"
            target="_blank"
            rel=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
