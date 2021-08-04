import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

import './index.css';

import meebitsdaoBlocks from '../../assets/images/meebitsFloatingBlocks.webp';
import menschBlocks from '../../assets/images/menschFloatingBlocks.webp';
import kryptosignBlocks from '../../assets/images/kryptosignFloatingBlocks.webp';
import menschPreview from '../../assets/images/menschSite.webp';
import kryptosignPreview from '../../assets/images/kryptosignSite.webp';

export default function ProjectsSection({activeProject, setActiveProject}) {
  
  const floatingBlocks = {
    meebitsdao: meebitsdaoBlocks,
    menschmaschine: menschBlocks,
    kryptosign: kryptosignBlocks,
  }

  const projects = [
    {
      id: 'meebitsdao',
      name: 'MeebitsDAO',
      description: `We are the principal sponsor and building the backend for MeebitsDAO, an independent community and development fund for the Meebits ecosystem.

      `,
      action: (
        <a href="https://meebitsdao.world" target="_blank" rel="noreferrer">
          <button className={css(styles.button)}>
            Welcome to the Metaverse
          </button>
        </a>
      ),
    },
    {
      id: 'kryptosign',
      name: 'KryptoSign',
      description: `Simple documents, signed with crypto wallets, with optional Twitter and Discord handles. It's used to power the MeebitsDAO, for guestbooks, and even for contracts with partners and freelancers.  `,
      action: (
        <a href="https://kryptosign.io" target="_blank" rel="noreferrer">
          <button className={css(styles.button)}>
            Try KryptoSign
          </button>
        </a>
      ),
    },
    {
      id: 'menschmaschine',
      name: 'MenschMaschine',
      description: `We’re generative music producers. We also love to jam analog synths and eurorack. So we built a system that's half Mensch (that’s us, the producers, doing our thing) and half Maschine (the recombinator that creates unexpected music clips).  `,
      action: (
        <a href="https://www.menschmaschine.io/" target="_blank" rel="noreferrer">
          <button className={css(styles.button)}>
            Visit MenschMaschine
          </button>
        </a>
      ),
    }
  ];

  const updateActiveTab = (id) => {
    setActiveProject(id);
  }

  const renderPreviews = () => {
    switch(activeProject) {
      case 'menschmaschine':
        return (
          <motion.img 
            className={css(styles.menschPreview)}
            src={menschPreview}
            key="mensch-preview"
            transition={{ duration: .5, type: "tween" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        );
      case 'kryptosign':
        return (
          <motion.img 
            className={css(styles.kryptosignPreview)}
            src={kryptosignPreview}
            key="kryptosign-preview"
            transition={{ duration: .5, type: "tween" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        );
      default:
        return null;
    }
  }

  
  return (
    <div id='projects-section' className={css(styles.container)}>
      <div className={css(styles.inlay)}>
        <AnimatePresence>
          <motion.img 
            className={css(styles.meebitsdaoBlocks)}
            src={floatingBlocks[activeProject]}
            transition={{ duration: .5, type: "tween" }}
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
          />
          { renderPreviews() }
        </AnimatePresence>
        <h2 className={css(styles.title)}>
          Our 
          <br />
          Projects
        </h2>
        <div className={css(styles.tabs)}>
          { projects.map((project, index) => {
            const active = activeProject === project.id;
            return (
              <div className={css(styles.project, active && styles.active)} onClick={() => updateActiveTab(project.id)}>
                <h3 className={css(styles.projectTitle)}>
                  { project.name }
                </h3>
                {active
                  ? <>
                      <p className={css(styles.projectDescription)}>
                        { project.description }
                      </p>
                      { project.action
                        ? project.action
                        : null
                      }
                    </>
                  : null
                }
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    minHeight: '100vh',
    // background: '#000',
  },
  active: {
    opacity: 1,
  },
  button: {
    background: "#000",
    textTransform: 'uppercase',
    width: '100%',
    height: 45,
    border: 0,
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
    cursor: 'pointer',
  },
  tabs: {
    marginLeft: 'auto',
    zIndex: 4,

    "@media only screen and (max-width: 767px)": {
      width: '60%',
      // marginRight: 'auto',
      marginLeft: 16,
    },

    "@media only screen and (min-width: 768px)": {
      marginRight: 80,
      width: 250,  
    },

    "@media only screen and (min-width: 1024px)": {
      marginRight: 130,
      width: 250,  
    },
  },
  play: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '15em',
    color: '#fff',
    cursor: 'pointer',

    "@media only screen and (max-width: 767px)": {
      top: 16,
      transform: 'translateX(-50%)',
      fontSize: '12em',
    }
  },
  meebitsdaoBlocks: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: -1,
    objectFit: 'contain',
  },
  project: {
    width: '100%',
    padding: 16,
    background: '#fff',
    opacity: .4,
    marginBottom: 16,
    cursor: 'pointer',
    zIndex: 4,
  },
  projectTitle: {
    fontSize: 25,
    marginTop: 0,
    marginBottom: 0,
    fontWeight: 500,

    "@media only screen and (max-width: 767px)": {
      fontSize: 24,
    }
  },
  projectDescription: {
    fontSize: 18,
  },
  inlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,

    "@media only screen and (max-width: 767px)": {
      display: 'flex',
      flexDirection: 'column',
    }
  },
  title: {
    background: '#000',
    maxWidth: 420,
    fontSize: 45,
    color: '#fff',
    marginLeft: 'auto',
    padding: '16px 38px',
    boxSizing: 'border-box',
    fontWeight: 500,
    textTransform: 'uppercase',

    "@media only screen and (max-width: 767px)": {
      background: 'transparent',
      paddingLeft: 16,
      marginBottom: 0,
      marginTop: 'auto',
      marginLeft: 0,
    },

    "@media only screen and (min-width: 768px)": {
      width: 370,  
    },

    "@media only screen and (min-width: 1024px)": {
      width: 420,  
    },
  },

  menschPreview: {
    position: 'absolute',
    objectFit: 'contain',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    "@media only screen and (max-width: 767px)": {
      display: 'none',
    },
    "@media only screen and (min-width: 768px)": {
      left: '27%',
      maxHeight: '45vh',
    },
    "@media only screen and (min-width: 1024px)": {
      // height: 700,
      maxHeight: '70vh',
      left: '30%',
      height: 600,
    },
    "@media only screen and (min-width: 1350px)": {
      height: 800,
      left: '35%',
    }
  },
  kryptosignPreview: {
    position: 'absolute',
    objectFit: 'contain',
    top: '50%',
    transform: 'translate(-50%, -50%)',

    "@media only screen and (max-width: 767px)": {
      display: 'none',
    },
    "@media only screen and (min-width: 768px)": {
      maxHeight: '45vh',
      left: '27%',
    },

    "@media only screen and (min-width: 1024px)": {
      maxHeight: '70vh',
      left: '30%',
      height: 600,
    },
    "@media only screen and (min-width: 1350px)": {
      height: 800,
      left: '35%',
    }
  },

})
