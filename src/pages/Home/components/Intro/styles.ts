import styled from 'styled-components'
import introBackgroundImg from '../../../../assets/intro-background.svg'
import { TitleText } from '../../../../components/Typography'

export const IntroContainer = styled.section`
  background: ${(theme) => `url(${introBackgroundImg}) no-repeat center
  `};
  background-size: cover;
  /* max-width: 74rem; */
  width: 100%;
  height: 34rem;

  /* margin: 2rem auto; */
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;

  img {
    height: 22.5rem;
  }
`

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5;
`

export const IntroText = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
