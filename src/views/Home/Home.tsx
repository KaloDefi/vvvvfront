import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@becoswap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import CakeStats from 'views/Home/components/CakeStats'
import LotteryCard from 'views/Home/components/LotteryCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import WinCard from 'views/Home/components/WinCard'



const Hero = styled.div`
  background-image: url('/images/pan-bg.png');
  -webkit-box-align: center;
  align-items: center;
  background-position: center center, center center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: rgb(146 146 146 / 35%) 0px 0px 0px 3000px inset;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  margin: auto auto 25px;
  padding: 32px 16px;
  text-align: center;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`


const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 24px;
  grid-gap: 24px;
  & > div {
    grid-column: span 6;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;
    & > div {
      grid-column: span 4;
    }
  }
`



const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Hero>
       <Heading as="h1" size="xl" mb="24px" color="secondary">
          {t('ViXA.FiNANCE')}
        </Heading>
        <Text>{t('HIGH YIELD FARMING & STAKING ON BINANCE SMART CHAIN.')}</Text>
      </Hero>
      <Page>
        <div>
          <Cards>
            <FarmStakingCard />
            <LotteryCard />
          </Cards>
          <CTACards>
          <EarnAPRCard />
          <EarnAssetCard />
          <WinCard />
        </CTACards>
          
          <Cards>
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
        </div>
      </Page>
    </div>
  )
}

export default Home
