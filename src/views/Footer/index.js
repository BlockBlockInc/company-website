import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import logo from '../../assets/images/logoWhiteStacked.webp';
import discordLogo from '../../assets/images/discordLogo.webp';
import openseaLogo from '../../assets/images/opensea.png';

import './index.css';
import EmailSubscribe from './EmailSubscribe';

export default function Footer() {
  return (
    <div id='footer' className={css(styles.footer)}>
      <div className={css(styles.left)}>
        <img src={logo} width='104' height='45' alt='Block::Block logo'/>
        <p className={css(styles.text)}>
           We are looking for one or two exceptional smart contract and web3.0 developers. But also interesting, entrepreneurial people from diverse backgrounds. Women and people of color are strongly encouraged to apply. An inclusive team is how we win the future. Hit us up at info@blockblock.io.
          <br />
        </p>

        <div className={css(styles.socials)}>
          <div className={css(styles.flexColumn) + ' discord-button-column'}>
            <a
              href='https://discord.gg/FjVH5UpEgC'
              target='_blank'
              rel='noreferrer'
            >
              <div className='discord-button'>
                <div className='discord-button-text'>Join us on</div>
                <div className='discord-logo'>
                  <img
                    src={discordLogo}
                    width='82'
                    height='23'
                    alt='Block::Block logo'
                  />
                </div>
              </div>
            </a>
          </div>
          <a href="https://twitter.com/blockblockio" target="_blank" rel="noreferrer">
            <i className={css(styles.icon) + " fab fa-twitter"}></i>
          </a>
          <a href="https://opensea.io/blockblock" target="_blank" rel="noreferrer">
            <img className={css(styles.opensea)} src={openseaLogo}></img>
          </a>
          <a href="https://www.linkedin.com/company/block-block/" target="_blank" rel="noreferrer">
            <i className={css(styles.icon) + " fab fa-linkedin-in"}></i>
          </a>
        </div>
      </div>
      <div className={css(styles.right)}>
        <EmailSubscribe />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 38,
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#999999',
    maxWidth: 390,
    // lineHeight: '16.8px',
    lineHeight: 1.2,
    fontSize: 18,
  },
  email: {
    color: '#999',
    textDecoration: 'underline',
  },
  socials: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    height: 35,
    width: 35,
    color: '#000',
    background: '#fff',
    // padding: 8,
    fontSize: '2em',
    borderRadius: '50%',
  },
  flexColumn: {
    flex: 'unset',
  },
  opensea: {
    height: 35,
    width: 35,
    marginLeft: 16,
  }
})
