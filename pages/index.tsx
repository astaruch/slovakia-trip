import Head from "next/head";
import styled from "styled-components";
import { FC } from "react";
import {
  Header2,
  Header3,
  Header5,
  Header6,
  ParagraphHuge,
  ParagraphMedium,
  ParagraphSmall,
  ParagraphTestimonial,
} from "components/common/Typography";
import Wave from "public/ColorWave.svg";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import PoolIcon from "@material-ui/icons/Pool";
import Vzor from "public/Vzor.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import FilterHdr from "@material-ui/icons/FilterHdr";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import { device } from "styles/theme";

const Home: FC = (props) => {
  return (
    <PageWrapper>
      <FolkImage />
      <HomeWrapper>
        <Head>
          <title>CryptoMood</title>
        </Head>
        <Header2>Slovakia trip</Header2>
        <Header5>feat. Køppaku Rhïev & friends</Header5>
        <ParagraphHuge>16.8. - 23.8. 2020</ParagraphHuge>
        <WaveWrapper>
          <WaveImage src={Wave} />
        </WaveWrapper>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="23.8."
            iconStyle={{ background: "#302c43", color: "#fff" }}
            icon={<AirportShuttleIcon />}
          >
            <TimelineHeader>Štart zájazdu</TimelineHeader>
            <Header6 className="vertical-timeline-element-subtitle">
              Miezgovce
            </Header6>
            <ParagraphTestimonial>
              Začiatok výletu z predošlého pobytu v obci Miezgovce, plánovaný
              odjazd cca v čase obedu.
            </ParagraphTestimonial>
            <ParagraphTestimonial>
              Miezgovce {"->"} Bánska Bystrica {"->"} Telgárt
            </ParagraphTestimonial>
            <ParagraphTestimonial>
              Cestou prípustná zastávka v priľahlých parkoch na kratšiu túru. V
              skorých večerných hodinách príjazd na chatu.
            </ParagraphTestimonial>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="24.8."
            iconStyle={{ background: "#302c43", color: "#fff" }}
            icon={<FilterHdr />}
          >
            <TimelineHeader>Turistický deň</TimelineHeader>
            <Header6 className="vertical-timeline-element-subtitle">
              Telgárt
            </Header6>
            <ParagraphTestimonial>
              V doobedných hodinách presun smerom na Kráľovu hoľu, jemná
              turistika.
            </ParagraphTestimonial>
            <ParagraphTestimonial>
              Pod Kráľovou hoľou možnosť zapožičať elektrobicykle a spraviť si
              väčší výlet po okolií.
            </ParagraphTestimonial>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="25.8."
            iconStyle={{ background: "#302c43", color: "#fff" }}
            icon={<PoolIcon />}
          >
            <TimelineHeader>Kúpací deň</TimelineHeader>
            <Header6 className="vertical-timeline-element-subtitle">
              Telgárt
            </Header6>
            <ParagraphTestimonial>
              V doobedných hodinách presun na Dobšinskú mašu, deň strávený v jej
              okolií pohybovými a voľnočasovými aktivitami.
            </ParagraphTestimonial>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="26.8."
            iconStyle={{ background: "#302c43", color: "#fff" }}
            icon={<LocationCityIcon />}
          >
            <TimelineHeader>Deň v Telgárte</TimelineHeader>
            <Header6 className="vertical-timeline-element-subtitle">
              Telgárt
            </Header6>
            <ParagraphTestimonial>
              Počas dňa navštívime Chmáročský viadukt a pohostíme sa miestnou
              kávou vo vyradenom vozni s výhľadom na viadukt, obzrieme si
              lokálne pamiatky a zbytok dňa strávime voľnočasovými aktivitami v
              okolií chaty.
            </ParagraphTestimonial>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="27.8."
            iconStyle={{ background: "#302c43", color: "#fff" }}
            icon={<AirportShuttleIcon />}
          >
            <TimelineHeader>
              Drevenné kostoly východného slovenska
            </TimelineHeader>
            <Header6 className="vertical-timeline-element-subtitle">
              Bardejov
            </Header6>
            <ParagraphTestimonial>
              Ráno presun z Telgártu smerom ku Bardejovu. V okolií Bardejova a
              Svidníka navštívime viacero drevenných kostolov. Večer prechádzka
              romantickým Bardejovom a jedna noc v Bardejove.
            </ParagraphTestimonial>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="28.8."
            iconStyle={{ background: "#302c43", color: "#fff" }}
            icon={<PoolIcon />}
          >
            <TimelineHeader>Deň na Domaši</TimelineHeader>
            <Header6 className="vertical-timeline-element-subtitle">
              Domaša
            </Header6>
            <ParagraphTestimonial>
              Počas dna presun smerom ku Košiciam, cestou kupkanye na Domaši.
              Prípadné ďalšie zaujímavosti cestou sú vítané. Večer strávený v
              Košiciach vymetaním miestnych pajzlov aj ne-pajzlov.
            </ParagraphTestimonial>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="29.8."
            iconStyle={{ background: "#302c43", color: "#fff" }}
            icon={<LocationCityIcon />}
          >
            <TimelineHeader>Deň v Košiciach</TimelineHeader>
            <Header6 className="vertical-timeline-element-subtitle">
              Košice
            </Header6>
            <ParagraphTestimonial>
              Spoznávanie Košických pamiatok a miestnycb koloritov. Počas dňa
              návšteva viacerých hipsterských podnikov a gastronomických
              zariadení. Večer obdobný program ako v piatok, so skorším koncom.
            </ParagraphTestimonial>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="30.8."
            iconStyle={{ background: "#302c43", color: "#fff" }}
            icon={<AirportShuttleIcon />}
          >
            <TimelineHeader>Deň cestovný</TimelineHeader>
            <Header6 className="vertical-timeline-element-subtitle">
              Košice {"->"} Domov
            </Header6>
            <ParagraphTestimonial>
              Cesta do svojich príbytkov, zhodnotenie zájazdu, odovzdanie
              ocenení, slávnostný príhovor.
            </ParagraphTestimonial>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </HomeWrapper>
      <FolkImage />
    </PageWrapper>
  );
};

export default Home;

const PageWrapper = styled.main`
  background: ${({ theme }) => theme.color.white};
  min-height: 100vh;
  padding: 0;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const FolkImage = styled.div`
  height: 100%;
  background-image: url(${Vzor});
  background-repeat: repeat-y;
  min-height: 3500px;
  width: 40px;
  z-index: 4;
  @media ${device.mobileL} {
    width: 136px;
  }
`;

const HomeWrapper = styled.main`
  background: ${({ theme }) => theme.color.white};
  min-height: 100vh;
  padding: 5rem 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 80px);
  @media ${device.mobileL} {
    width: calc(100% - 272px);
  }
`;

const TimelineHeader = styled(Header5)`
  color: ${({ theme }) => theme.color.white};
  text-align: start;
`;

const WaveImage = styled.img`
  position: absolute;
  bottom: -2rem;
  width: 700px;
  right: -80px;
  z-index: 2;
  @media ${device.mobileL} {
    width: 100%;
    right: 0;
    bottom: -3rem;
  }
`;

const WaveWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

const LearnMoreParagraph = styled(ParagraphMedium)`
  margin-top: 6rem;
  cursor: pointer;
  z-index: 2;
  &:hover {
    color: ${({ theme }) => theme.color.gray0};
  }
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
