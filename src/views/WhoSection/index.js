import React from 'react';
import { css, StyleSheet } from 'aphrodite';

import './index.css';
import UserCard from './UserCard';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import zach from '../../assets/images/zach_pfp.webp';

const members = [
   {
    name: 'Bart',
    img: "https://blockblock-frontend.s3.us-west-2.amazonaws.com/avatars/bart.png",
    description: 'Cofounder. Bart built 25 #1 App Store hits & ran smartphone games for Disney. He cofounded the Mozilla Builders incubator and headed marketing & business affairs for Firefox 1.0. He has a long track record in open source, community work and activism (including as an Echoing Green fellow). Occasional angel investor (MUBI, Hooked).',
  },
  {
    name: 'Mark',
    img: "https://blockblock-frontend.s3.us-west-2.amazonaws.com/avatars/Mark.webp",
    description: 'Cofounder. Mark was previously Chief Product Officer for Mozilla and steward of Firefox for the Quantum launch. He served as CTO for cloud computing pioneer Joyent (containers, Node.js), and has been the technical cofounder at multiple early startups.' 
  },
  {
    name: 'Kai',
    img: "https://blockblock-frontend.s3.us-west-2.amazonaws.com/avatars/Kai.webp",
    description: 'Cofounder. Kai most recently was in Experience Design at Netflix, working closely with content creators and product owners to create special experiences on the platform. Before that, he worked at Sony Pictures Entertainment. Kai discovered NFTs in 2017 when he cracked the CryptoKitties genetic code, and has filed three related patents. He is the founder of the MeebitsDAO project.',
  },
  {
    name: 'Carly',
    img: "https://blockblock-frontend.s3.us-west-2.amazonaws.com/avatars/Carly.webp",
    description: 'Chief of Staff. Carly Reilly is an entrepreneur, political commentator, and fundraiser. Carly joined Andrew Yang’s 2020 presidential campaign in August 2018 and helped raise over $40 million as national finance director. She is a Washington Post contributor, a co-host of the Yang Speaks podcast, and has been featured by Bloomberg News.',
  },
    {
    name: 'Luke',
    img: "https://blockblock-frontend.s3.us-west-2.amazonaws.com/avatars/Luke.webp",
    description: 'Creative Director. Luke has spent the last 20 years working as a creative at Wunderman, McCann, MRM, Publicis, and Digitas LBi, among other advertising giants. He was fortunate to spend two of those years traveling the world with Hyper Island, training advertising agencies on building agile management teams that solve for constant digital and social change.',
  },
  {
    name: 'Neo',
    img: "https://blockblock-frontend.s3.us-west-2.amazonaws.com/avatars/Neo.webp",
    description: 'Developer. Neo is currently taking a gap year from the University of Central Florida, where he studies computer science, to work with Block::Block. He enjoys building and iterating on new ideas and is excited about jumping into the world of Web3 and crypto. He spends his free time at hackathons.',
  },
  {
    name: 'Mike',
    img: "https://blockblock-frontend.s3.us-west-2.amazonaws.com/avatars/Ginza.webp",
    description: 'Content & Community. Mike loves being at the breaking edge of culture, trends and consumer insight. He’s fascinated by the metaverse, NFT’s and the future of commerce. By day he is a senior strategist at MediaMonks advertising agency in London. By night you’ll find him in our Discords! You probably know him better as Ginza / GinzaETH and he’s all things content and community for Block::Block & MeebitsDAO.',  
  },
  {
    name: 'Angele',
    img: "https://blockblock-frontend.s3.us-west-2.amazonaws.com/avatars/Angele.webp",
    description: 'Intern. Angele studies computer science at McGill. Recently caught the crypto and NFT bug. As part of her internship with Block::Block, she is building a website that mints NFTs for social media influencers.',
  },
  {
    name: 'Ryan',
    img: "https://blockblock-frontend.s3.us-west-2.amazonaws.com/avatars/Ryan.webp",
    description: 'Technical Advisor. Ryan Ouyang is an engineer. A recovered hackathon addict with 10+ wins, Ryan has been a finalist at 3 ETHGlobal events and operated in and built blockchain apps for the biggest companies in Canada. He is currently working on a new NFT wearables system, as well as a new blockchain game.',
  },
  {
    name: 'Josh',
    img: "https://blockblock-frontend.s3.us-west-2.amazonaws.com/avatars/Josh.webp",
    description: 'Engineer. Josh is a Web3 software engineer. He comes from a TradFi background, previously working at Capital One Labs (in-house product incubator & innovation lab) where he led crypto exploration efforts. Active NFT and crypto enthusiast.',
  },
  {
    name: 'Mateo',
    img: "https://blockblock-frontend.s3.us-west-2.amazonaws.com/avatars/mateo.webp",
    description: 'EIR. Mateo founded his first company at age 16. Recently he won first prize among 400+ competitors in a startup competition organized by the BBVA Bank. He is now starting his next adventure in what he believes to be the most significant thing since the internet: blockchain. Mateo is our first EIR.',
  },
   {
      name: 'Zach',
      img: zach,
      description: 'Community Manager. Zach is a computer science graduate from Shepherd University. He has won multiple writing competitions and served in several leadership roles in college. With a deep interest in the mass adoption of blockchain technologies, Zach is using his community skills and knowledge of the industry to build toward that future.'
   }
]

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className={css(styles.arrow) + " far fa-chevron-right"}></i>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className={css(styles.arrow) + " far fa-chevron-left"}></i>
    </div>
  );
}

export default function WhoSection() {
  return (
    <div id='who-section' className={css(styles.container)}>
      <div className={css(styles.topText)}>
        <div className={css(styles.topTextWrapper)}>
          <h2 className={css(styles.whoWeAreTitle)}>
            Who 
            <b/>
            we are
          </h2>
          <div className={css(styles.whoWeAreOverlay)}></div>
        </div>
        <p className={css(styles.quote)}>
          Block::Block was started when Mark and Bart, two of the cofounders of the Mozilla Builders incubator, teamed up with NFT OG Kai. We love decentralization, open source, and creators. Investors include Divergence Ventures, Marc Benioff, Kevin Lin, Kun Gao, and Scott and Cyan Bannister.
        </p>
      </div>
      <div className={css(styles.carouselSection)}>
        <Slider
          dots={false}
          infinite={true}
          slidesToShow={4}
          adaptiveHeight={true}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          responsive={[
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 767,
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
      paddingTop: 100,
      paddingBottom: 100,
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

    "@media only screen and (max-width: 767px)": {
      width: '100%',
    }
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
    display: 'flex',
    flexDirection: 'column',
    "@media only screen and (max-width: 767px)": {
      fontSize: 45,
    }
  },
  carouselSection: {
    marginTop: 50,
    paddingBottom: 16,

    "@media only screen and (max-width: 767px)": {
      marginTop: 16,
      paddingBottom: 30,
    }
  },
  topTextWrapper: {
    position: 'relative',
    paddingLeft: 29,

    "@media only screen and (max-width: 767px)": {
      width: '100%',
      padding: 16,
      paddingTop: 0,
    }
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
  arrow: {
    color: '#aaa',
    fontSize: 40,

    "@media only screen and (max-width: 767px)": {
      fontSize: 30,
    }
  },
})
