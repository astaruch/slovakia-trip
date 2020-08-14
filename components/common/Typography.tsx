import styled from "styled-components";

export const Header2 = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 3.75rem;
  line-height: 5rem;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.09375rem;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 0;
`;

export const Header3 = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 3.5rem;
  letter-spacing: -0.03125rem;
  color: ${({ theme }) => theme.color.gray50};
`;

export const Header5 = styled.h5`
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.25rem;
  text-align: center;
  color: ${({ theme }) => theme.color.gray50};
  margin-top: 0;
  margin-bottom: 0;
`;

export const Header6 = styled.h6`
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.75rem;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  margin-top: 0;
  margin-bottom: 0;
  text-align: start;
`;

export const ParagraphHuge = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.375rem;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.009375rem;
  color: ${({ theme }) => theme.color.gray50};
  margin-top: 0;
`;

export const ParagraphBig = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 1.5rem;

  display: flex;
  align-items: center;
  letter-spacing: 0.009375rem;

  color: ${({ theme }) => theme.color.gray0};
`;

export const ParagraphMedium = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.35rem;
  line-height: 1.8125rem;

  display: flex;
  align-items: center;
  text-align: center;

  color: ${({ theme }) => theme.color.gray30};
`;

export const ParagraphSmall = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.0275rem;
  color: ${({ theme }) => theme.color.gray10};
`;

export const ParagraphTestimonial = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin-top: 0;
  margin-bottom: 0;

  display: flex;
  align-items: center;
  letter-spacing: 0.009375rem;

  color: ${({ theme }) => theme.color.gray5};
`;

export const RedBadge = styled.span`
  background: ${({ theme }) => theme.color.red};
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;

  display: flex;
  align-items: center;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  margin-left: 0.5rem;
`;
