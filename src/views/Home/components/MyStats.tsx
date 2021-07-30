import React from 'react'
import { PUSX_PER_BLOCK, TRANSFER_TAX } from 'config'
import { useFarms, useGetApiPrices, usePools, usePriceCakeBusd } from 'state/hooks'

import { BaseLayout, Box, Card, CardBody, Heading, Skeleton, Text } from '@becoswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceAmount, getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getAddress, getCakeAddress } from 'utils/addressHelpers'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const StyledBecoStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  border-radius: ${({ theme }) => theme.radii.default};
`

const BecoStatsContent = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;

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

const Row = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: column wrap;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 16px;
`

const TvlBox = styled(Box)`
  text-align: right;
`

const StatsBox = styled(BaseLayout)`
  grid-column: span 12 !important;

  & > div {
    grid-column: span 12;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 6;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const MyStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const becoSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const becoPrice = usePriceCakeBusd()
  const marketcap = becoSupply * becoPrice.toNumber()

  const farms = useFarms()
  const { account } = useWeb3React()
  const pools = usePools(account);
  const prices = useGetApiPrices()
  let tvl = null

  pools.forEach(pool => {
    if (!pool.totalStaked || !prices) {
      return
    }
    const stakingTokenPrice = prices[getAddress(pool.stakingToken.address).toLowerCase()];
    if (stakingTokenPrice) {
      const locked = new BigNumber(pool.totalStaked).toNumber() * stakingTokenPrice

      tvl += getBalanceAmount(new BigNumber(locked)).toNumber()
    }

  })

  farms.data.forEach(farm => {
    if (!farm.lpTotalInQuoteToken || !prices) {
      return
    }

    const quoteTokenPriceUsd = prices[getAddress(farm.quoteToken.address).toLowerCase()]
    if (quoteTokenPriceUsd) {
      const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(quoteTokenPriceUsd)
      if (totalLiquidity.toNumber() ) {
        tvl += totalLiquidity.toNumber()
      }
    }
  })

  const tvlFormatted = tvl
    ? `$${tvl.toLocaleString(undefined, { maximumFractionDigits: 3 })}`
    : '-'
  return (
    <StyledBecoStats>
      <CardBody>
        <BecoStatsContent>
          <Box>
            <Heading size="xl" mb="24px">
              {t('KOLO Stats')}
            </Heading>
          </Box>

          <TvlBox>
            {tvl ? (
              <>
                <Text fontSize="28px">{`${tvlFormatted}`}</Text>
                <Text fontSize="12px" color="textSubtle">{t('Across all LPs and KOLO Pools')}</Text>
              </>
            ) : (
              <Skeleton height={66} />
            )}
          </TvlBox>

          <StatsBox>
            <div>
              <Row>
                <Text fontSize="13px" color="textSubtle">{t('Market Cap')}</Text>
                {marketcap && <CardBusdValue bold fontSize="18px" value={marketcap} />}
              </Row>
            </div>
            <div>
              <Row>
                <Text fontSize="13px" color="textSubtle">{t('Circulating KOLO Supply')}</Text>
                {becoSupply && <CardValue fontSize="18px" value={becoSupply} />}
              </Row>
              <Row>
                <Text fontSize="13px" color="textSubtle">{t('Total KOLO Burned')}</Text>
                <CardValue fontSize="18px" decimals={0} value={burnedBalance} />
              </Row>
            </div>
            <div>
              <Row>
                <Text fontSize="13px" color="textSubtle">{t('New KOLO/block')}</Text>
                <CardValue fontSize="18px" decimals={0} value={PUSX_PER_BLOCK.toNumber()} />
              </Row>
              <Row>
                <Text fontSize="13px" color="textSubtle">{t('Transfer KOLO Fee')}</Text>
                <Text fontSize="18px" bold>{TRANSFER_TAX}%</Text>
              </Row>
            </div>
          </StatsBox>
        </BecoStatsContent>
      </CardBody>
    </StyledBecoStats>
  )
}

export default MyStats
