import React, { FC } from "react";
import styled from "styled-components";
import LogoCryptoMood from "public/Logo_CryptoMood_light.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const Header: FC = (props) => {
  const { pathname } = useRouter();
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <CryptomoodLogo src={LogoCryptoMood} />
      </LogoWrapper>
      <MenuWrapper>
        {MenuOptions.map(({ id, text }) => (
          <Link href={id} passHref key={id}>
            <MenuItem active={pathname === id}>{text}</MenuItem>
          </Link>
        ))}
      </MenuWrapper>
      <LoginWrapper>
        <SignInButton>Sign in</SignInButton>
        <SignUpButton>Sign up</SignUpButton>
      </LoginWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  max-width: 81.25rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const LogoWrapper = styled.div``;

const CryptomoodLogo = styled.img`
  width: 10rem;
  height: auto;
  cursor: pointer;
  margin-left: 1.5625rem;
  margin-right: 1.5625rem;
`;

const MenuWrapper = styled.menu`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  padding-inline-start: 0;
`;

const MenuItem = styled.a<{ active?: boolean }>`
  padding: 0.625rem;
  min-width: 6.25rem;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.1875rem;
  letter-spacing: 0.009375rem;
  border-radius: 0.25rem;
  background: ${({ active, theme }) =>
    active ? theme.color.lighterBackground : theme.color.background};
  margin-right: 1.25rem;
  &:hover {
    background: ${({ theme }) => theme.color.lighterBackground};
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInButton = styled(MenuItem)`
  cursor: pointer;
  border: 0.0625rem solid ${({ theme }) => theme.color.border};
  margin-right: 0.625rem;
`;

const SignUpButton = styled(MenuItem)`
  cursor: pointer;
  background: ${({ theme }) => theme.color.primary};
  position: relative;
  z-index: 1;
  ::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: ${({ theme }) => theme.color.gradientBackground};
    z-index: -1;
    transition: opacity 0.2s ease-in-out;
    opacity: 0;
    border-radius: 0.25rem;
  }
  &:hover {
    background: ${({ theme }) => theme.color.primary};
    ::before {
      opacity: 1;
    }
  }
`;

const MenuOptions = [
  {
    id: "",
    text: "Home",
  },
  {
    id: "app",
    text: "App",
  },
  {
    id: "api",
    text: "API",
  },
  {
    id: "widgets",
    text: "Widgets",
  },
  {
    id: "pricing",
    text: "Pricing",
  },
  {
    id: "about",
    text: "About",
  },
];
