import React, { FC } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Header3 } from "components/common/Typography";
import Intotheblock from "public/Intotheblock.png";
import Exmo from "public/Exmo.png";
import Santiment from "public/Santiment.png";
import Coinpaprika from "public/Coinpaprika.png";
import Bitfineon from "public/Bitfineon.png";
import Exrates from "public/Exrates.png";
import { ArrowForward } from "@material-ui/icons";

const Partners: FC = (props) => {
  return (
    <PartnersWrapper>
      <PartnersHeader>Our beloved partners</PartnersHeader>
      <PartnersLogosWrapper>
        <PartnersLogos>
          <PartnerLogo src={Intotheblock} />
          <PartnerLogo src={Exmo} height={2.5} />
          <PartnerLogo src={Santiment} />
          <PartnerLogo src={Coinpaprika} height={2.5} />
          <PartnerLogo src={Bitfineon} height={4.5} />
          <PartnerLogo src={Exrates} height={5} />
        </PartnersLogos>
        <PartnerButton>
          Apply for partnership
          <ArrowForward />
        </PartnerButton>
      </PartnersLogosWrapper>
    </PartnersWrapper>
  );
};

export default Partners;

const PartnersWrapper = styled.section`
  background: ${({ theme }) => theme.color.gradientBackground};
  border-radius: 2rem;
  width: 81.25rem;
  height: 24rem;
  padding: 3rem;
`;

const PartnersHeader = styled(Header3)`
  color: ${({ theme }) => theme.color.black};
  margin-top: 0;
`;

const PartnersLogosWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
`;

const PartnersLogos = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: -1rem;
`;

const PartnerLogo = styled.img<{ height?: number }>`
  height: ${({ height = 3.5 }) => height}rem;
  width: auto;
  margin: 0.5rem 1rem 1rem;
`;

const PartnerButton = styled.button`
  font-style: normal;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.065rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.046875rem;
  text-transform: uppercase;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.gray100};
  border: 1px solid ${({ theme }) => theme.color.gray100};
  color: ${({ theme }) => theme.color.black};
  height: 5.5rem;
  width: 20rem;
  cursor: pointer;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.color.black};
    border: 1px solid ${({ theme }) => theme.color.black};
  }
  padding: 1rem 1rem 1rem 2rem;
`;
