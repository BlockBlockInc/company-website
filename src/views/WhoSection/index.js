import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import Carousel, {
  slidesToShowPlugin,
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import './index.css';
import UserCard from './UserCard';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const members = [
  {
    name: 'Bart',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Co-founder. Bart built 25 #1 App Store hits & ran smartphone games for Disney. He co-founded the Mozilla Builders incubator and headed marketing & business affairs for Firefox 1.0. He has a long track record in open source, community work and activism (incl as an Echoing Green fellow). Occasional angel investor (MUBI, Hooked).',
  },
  {
    name: 'Mark',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Co-founder. Mark was previously Chief Product Officer for Mozilla and steward of Firefox for the Quantum launch. He served as CTO for cloud computing pioneer, Joyent, and has been the technical co-founder at multiple early startups.' 
  },
  {
    name: 'Luke',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Creative Director. Luke has spent the last 20 years working as a creative at Wunderman, McCann, MRM, Publicis, and Digitas LBi, among other advertising giants. He was fortunate to spend two of those years traveling the world with Hyper Island, training advertising agencies on building agile management teams that solve for constant digital and social change.',
  },
  {
    name: 'Kai',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Advisor. Kai is in Experience Design at Netflix, where he works closely with content creators and product owners to create special experiences on the platform. He is the founder of the MeebitsDAO project and has spent years in the crypto world. He previously worked at Sony Pictures Entertainment.',
  },
  {
    name: 'Carly',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Chief of Staff. Carly Reilly is an entrepreneur, political commentator, and fundraiser. Carly joined Andrew Yang’s 2020 presidential campaign in August 2018 and helped raise over $40 million as national finance director. She is a Washington Post contributor, a co-host of the Yang Speaks podcast, and has been featured by Bloomberg News.',
  },
  {
    name: 'Neo',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Developer. Neo is currently taking a gap year from the University of Central Florida - where he studies computer science - to work with Block::Block. He enjoys building and iterating on new ideas and is excited about jumping into the world of Web3 and crypto. In his free time, he enjoys attending hackathons and meeting new people!',
  },
  {
    name: 'Mike',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Content & Community. Mike is a former serial entrepreneur and loves being at the breaking edge of culture, trends and consumer insight. He’s fascinated by the metaverse, NFT’s and the future of commerce. By day he is a senior strategist at MediaMonks advertising agency in London. By night you’ll find him in our Discords! You probably know him better as Ginza / GinzaETH and he’s all things content and community for BLOCK::BLOCK & MeebitsDAO.',  
  },
  {
    name: 'Angele',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Intern. Angele is a Comp Sci & Stats undergrad student at McGill and recently got into the crypto/NFT space. As part of her internship with Block::Block, she is building a website that mints NFTs for social media influencers.',
  },
  {
    name: 'Ryan',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Technical Advisor. Ryan Ouyang is an engineer. A recovered hackathon addict with 10+ wins, Ryan has been a finalist at 3 ETHGlobal events and operated in and built blockchain apps for the biggest companies in Canada. He is currently working on a new NFT wearables system, as well as a new blockchain game.',
  },
  {
    name: 'Josh',
    img: "https://lh3.googleusercontent.com/JBsQ4pTRBvEMXN3vkcl7gP9wr9BZbKegtp-wPdYAw2MMmXDIKoonRu098OphXg3lCZJ1TFY0hLKKlrJBfI6HkfsGzMr7LvirG4JF",
    description: 'Advisor. Josh is a Web3 software engineer. He comes from a TradFi background, previously working at Capital One Labs (in-house product incubator & innovation lab) where he led crypto exploration efforts. He is now an active NFT and crypto enthusiast.',
  },
]

export default function WhoSection() {
  return (
    <div id='who-section' className={css(styles.container)}>
      <div className={css(styles.topText)}>
        <div className={css(styles.topTextWrapper)}>
          <h2 className={css(styles.whoWeAreTitle)}>
            Who <b/> we are
          </h2>
          <div className={css(styles.whoWeAreOverlay)}></div>
        </div>
        <p className={css(styles.quote)}>
          Block::Block was started when Mark and Bart, who co-led the Mozilla Builders incubator, teamed up with NFT OG Kai. We love decentralization, open source, and creators. Investors include Divergence.vc, Marc Benioff, Kevin Lin, Kun Gao and Cyan Bannister.
        </p>
      </div>
      <div className={css(styles.carouselSection)}>
        <Slider
          dots={false}
          infinite={true}
          slidesToShow={4}
          adaptiveHeight={true}
          responsive={[
            {
              breakpoint: 1250,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
          ]}
        >
          { members.map((member, index) => {
            return (
              <UserCard 
                name={member.name}
                img={member.img}
                description={member.description}
                key={member.name + `_${index}_member_card`}
              />
            )
          }) }
        </Slider>
      </div>
    </div>
  );
}


const styles = StyleSheet.create({
  container: {
    background: '#1A1A1A',
    // minHeight: '100vh',
    '@media only screen and (min-width: 768px)': {
      paddingTop: 50,
      paddingBottom: 50,
    },
  },
  topText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    "@media only screen and (max-width: 767px)": {
      flexDirection: 'column',
    }
  },
  whoWeAreOverlay: {
    background: '#000',
    position: 'absolute',
    height: '100%',
    width: 297,
    left: 0,
    top: 0,
    zIndex: 1,
  },
  whoWeAreTitle: {
    textTransform: 'uppercase',
    maxWidth: 170,
    fontSize: 60,
    color: '#fff',
    fontWeight: 500,
    whiteSpace: 'pre-wrap',
    marginRight: 40,
    zIndex: 3,
    position: 'relative',
    marginTop: 0,
    marginBottom: 0,
  },
  carouselSection: {
    marginTop: 50,
    paddingBottom: 16,
  },
  topTextWrapper: {
    position: 'relative',
    paddingLeft: 29,
  },
  quote: {
    color: '#fff',
    fontSize: 20,
    lineHeight: '36px',
    fontWeight: 400,
    maxWidth: 617,
    position: 'relative',
    zIndex: 3,

    "@media only screen and (max-width: 767px)": {
      padding: 16,
    }
  },
  benioff: {
    color: '#fff',
    position: 'absolute',
    bottom: -25,
    right: 36,
  },
})
