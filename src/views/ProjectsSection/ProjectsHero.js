import { css, StyleSheet } from 'aphrodite';
import { motion, AnimatePresence } from "framer-motion";

import menschBackground from '../../assets/images/menschBackground.webp';
import kryptosignBackground from '../../assets/images/kryptosignBackground.webp';

export default function ProjectsHero({activeProject, translate}) {
  const renderHero = () => {
    switch(activeProject) {
      case 'meebitsdao':
        return (
          <motion.div className={css(styles.meebitsdaoBackground)}
            transition={{ duration: .5, type: "tween", ease: 'easeInOut' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            <motion.video
              key={"https://d198suc4pour3z.cloudfront.net/meebits_fastmov.mp4"}
              id="meebits-video"
              className={css(styles.meebitBattle) + ' projects-background'}
              src={"https://d198suc4pour3z.cloudfront.net/meebits_fastmov.mp4"}
              type='video/mp4'
              width='1023'
              height='640'
              alt='Meebits Battle'
              loop
              autoPlay
              muted
            />
          </motion.div>
        );
      case 'menschmaschine':
        return (
          <motion.img
            key="menschmaschine-animation"
            className={css(styles.imageBackground)}
            src={menschBackground}
            width={2048}
            height={1296}
            transition={{ duration: .5, type: "tween" }}
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0 }}
          />
        );
      case 'kryptosign':
        return (
          <motion.img
            key="kryptosign-animation"
            className={css(styles.imageBackground)}
            src={kryptosignBackground}
            width={2048}
            height={1296}
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
    <div 
      id="projects-hero"
      className={css(styles.container)}
      style={{
        transform: `translate3d(0px, ${translate}px, 0px)`,

      }}>
      <AnimatePresence>
        { renderHero() }
      </AnimatePresence>
    </div>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    background: '#000',

    "@media only screen and (min-width: 768px)": {
      top: 800,
    },

    "@media only screen and (min-width: 1024px)": {
      top: 800,
    },

    "@media only screen and (max-width: 767px)": {
      minHeight: '115vh',
      top: 780,
    }
  },
  meebitBattle: {
    width: '100%',
    height: '105vh',
    objectFit: 'cover',
    '@media only screen and (max-width: 767px)': {
      minHeight: '115vh',
    }
  },
  meebitsdaoBackground: {
    position: 'relative',
    width: '100%',
  },
  meebitsdaoBlocks: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
    minHeight: '105vh',
    objectFit: 'cover',
    zIndex: 1,
  },
})
