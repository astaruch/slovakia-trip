import Head from "next/head";
import styles from "styles/Home.module.css";
import styled from "styled-components";
import { FC } from "react";
import {
  Header2,
  Header3,
  Header5,
  ParagraphBig,
  ParagraphHuge,
  ParagraphMedium,
  ParagraphSmall,
  ParagraphTestimonial,
  RedBadge,
} from "components/common/Typography";
import IosBadge from "public/App Store Badge US Black.svg";
import AndroidBadge from "public/Google Play Badge US.svg";
import CryptomoodBadge from "public/Cryptomood Badge.svg";
import Wave from "public/ColorWave.svg";
import Yahoo from "public/Yahoo_Finance.png";
import Fintech from "public/Fintech_Futures.png";
import Business from "public/Business_Telegraph.png";
import Coinfomania from "public/Coinfomania.png";
import Kurier from "public/Bitcoin_Kurier.png";
import Thecapital from "public/Thecapital.png";
import Hackernoon from "public/Hackernoon.png";
import Coinspot from "public/Coinspot.png";
import Socials from "public/Socials.png";
import Exchanges from "public/Exchanges.png";
import Alarms from "public/Alarms.png";
import Bell from "public/bell-ring.svg";
import PinkPuddle from "public/Pink_Puddle.svg";
import Stars from "public/Stars.svg";
import { ArrowDownward } from "@material-ui/icons";
import Carousel from "components/common/Carousel";
import Partners from "components/common/Partners";
import FAQ from "components/Home/FAQ";

const Home: FC = (props) => {
  return (
    <HomeWrapper>
      <Head>
        <title>CryptoMood</title>
      </Head>
      <Header2>
        Crypto news & social activity.
        <br />
        AI-based sentiment analytics.
        <br />
        App + Application + API
      </Header2>
      <ParagraphHuge>
        The Most Reliable Crypto Sentiment Analysis Tools
        <br />
        Powered by AI and Data from 50000+ Sources.
        <br />
        Real-time Crypto Sentiment Signals.
      </ParagraphHuge>
      <BadgesWrapper>
        <AppStoreBadge src={IosBadge} />
        <AppStoreBadge src={AndroidBadge} />
      </BadgesWrapper>
      <ParagraphBig>
        or try the web version
        <RedBadge>NEW!</RedBadge>
      </ParagraphBig>
      <AppStoreBadge src={CryptomoodBadge} />
      <WaveWrapper>
        <WaveImage src={Wave} />
      </WaveWrapper>
      <LearnMoreParagraph>
        <LearnMoreArrow />
        Learn more
      </LearnMoreParagraph>
      <LogosWrapper>
        <LogoImage src={Yahoo} />
        <LogoImage src={Fintech} />
        <LogoImage src={Business} />
        <LogoImage src={Coinfomania} height={3} />
        <LogoImage src={Kurier} height={3} />
        <LogoImage src={Thecapital} height={3} />
        <LogoImage src={Hackernoon} height={3} />
        <LogoImage src={Coinspot} height={2} />
      </LogosWrapper>
      <YoutubeIframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Header5>
        CryptoMood tracks everything that affects price of your cryptoassets.
        Trade <br /> based on science!
      </Header5>
      <InfoSectionsWrapper>
        <InfoSection>
          <InfoSectionImageWrapper>
            <InfoSectionImage src={Socials} />
          </InfoSectionImageWrapper>
          <InfoSectionTitle>
            Crypto News & Social media sentiment analysis
          </InfoSectionTitle>
          <InfoSectionText>
            We Process Data From 50,000+ News Sources, 10+ News Aggregators, 4
            Social Media Networks, 100+ Trading And Crypto Blogs.
          </InfoSectionText>
        </InfoSection>
        <InfoSection>
          <InfoSectionImageWrapper>
            <InfoSectionImage src={Exchanges} />
          </InfoSectionImageWrapper>
          <InfoSectionTitle>
            Whale Transaction Tracking & Alerts
          </InfoSectionTitle>
          <InfoSectionText>
            We Process Data From 50,000+ News Sources, 10+ News Aggregators, 4
            Social Media Networks, 100+ Trading And Crypto Blogs.
          </InfoSectionText>
        </InfoSection>
        <InfoSection>
          <InfoSectionImageWrapper>
            <InfoSectionImage src={Alarms} />
            <InfoSectionBell src={Bell} />
          </InfoSectionImageWrapper>
          <InfoSectionTitle>
            Alarms & Notifications for Crypto Sentiment and Transactions
          </InfoSectionTitle>
          <InfoSectionText>
            Live Tracking Of Large Crypto Transactions To And From Exchanges, As
            Well As Between Wallets. Observe Large Bitcoin Whale Movements And
            Mimic Their Trades. Track bitcoin whales now!
          </InfoSectionText>
        </InfoSection>
      </InfoSectionsWrapper>
      <CryptomoodHeaderWrapper>
        <CryptomoodPuddle src={PinkPuddle} />
        <CryptomoodHeader3>
          <RoseSpan>CryptoMood</RoseSpan> saves your time and gives you
          real-time <RoseSpan>crypto sentiment signals</RoseSpan> ⚡⚡⚡️.
          Complex <RoseSpan>AI and NLP</RoseSpan> algorithms are watching the
          market 24/7
        </CryptomoodHeader3>
      </CryptomoodHeaderWrapper>
      <TestimonialsWrapper>
        <TestimonialsHeader>
          <Header3>Testimonials</Header3>
          <TestimonialsHeaderRating>
            <TestimonialsRatingImage src={Stars} />
            <ParagraphTestimonial>4.8 based on app store</ParagraphTestimonial>
          </TestimonialsHeaderRating>
        </TestimonialsHeader>
        <Carousel />
      </TestimonialsWrapper>
      <Partners />
      <FAQ />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.main`
  background: #161616;
  min-height: 100vh;
  padding: 5rem 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BadgesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;

const AppStoreBadge = styled.img`
  height: 5rem;
  cursor: pointer;
  &:first-of-type {
    margin-right: 1.5625rem;
  }
`;

const WaveImage = styled.img`
  position: absolute;
  width: 100%;
  top: -7rem;
`;

const WaveWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const LearnMoreParagraph = styled(ParagraphMedium)`
  margin-top: 6rem;
  cursor: pointer;
  z-index: 2;
  &:hover {
    color: ${({ theme }) => theme.color.gray0};
  }
`;

const LearnMoreArrow = styled(ArrowDownward)`
  margin-right: 1rem;
`;

const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 81.25rem;
  margin: 3rem -1rem -1rem;
`;

const LogoImage = styled.img<{ height?: number }>`
  height: ${({ height = 4 }) => height}rem;
  width: auto;
  margin: 1rem;
`;

const YoutubeIframe = styled.iframe`
  margin-top: 6rem;
  margin-bottom: 6rem;
  width: 62.5rem;
  height: 35rem;
  border: 0;
`;

const InfoSectionsWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 81.25rem;
`;

const InfoSection = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  width: calc(33% - 3rem);
  margin-right: 3rem;
`;

const InfoSectionImageWrapper = styled.div`
  height: 12rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const InfoSectionImage = styled.img`
  width: 100%;
  height: auto;
`;

const InfoSectionBell = styled.img`
  height: 7rem;
  width: auto;
  position: absolute;
  bottom: -1rem;
  right: 1rem;
`;

const InfoSectionTitle = styled(Header5)`
  text-align: start;
  margin-bottom: 0;
  margin-top: 0;
`;

const InfoSectionText = styled(ParagraphSmall)`
  text-align: start;
`;

const CryptomoodHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 19rem;
  margin-bottom: 19rem;
`;

const CryptomoodHeader3 = styled(Header3)`
  width: 45rem;
  z-index: 2;
`;

const CryptomoodPuddle = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const RoseSpan = styled.span`
  color: ${({ theme }) => theme.color.primary};
`;

const TestimonialsWrapper = styled.section`
  width: 100%;
  margin-bottom: 10rem;
`;

const TestimonialsHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

const TestimonialsHeaderRating = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 1rem;
  height: 3.5rem;
`;

const TestimonialsRatingImage = styled.img``;
